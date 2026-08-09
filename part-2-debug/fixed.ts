import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();

interface BookingRequest {
  studentId: string;
  teacherId: string;
  slot: string; // ISO datetime string
  subject: string;
}


//Bug: 1 added async keyword for awaiting the promise returned by get()
export const bookSession = functions.https.onCall(async (data: BookingRequest, context: functions.https.CallableContext) => {
    // Bug: 1 - check if the user is authenticated before proceeding with the booking
    if(!context.auth){
        return {
            success: false,
            message: "User not authenticated",
        };
    }

    const booking = {
      studentId: data.studentId,
      teacherId: data.teacherId,
      slot: data.slot,
      subject: data.subject,
      status: "confirmed",
      createdAt: new Date(),
    };

    const teacherRef = db.collection("teachers").doc(data.teacherId);

    // Bug: 2 - returns a promise, so we need to await it
    const existing = await teacherRef.collection("bookings").where("slot", "==", data.slot).get(); 

    if (existing.docs.length > 0) {
      return {
        success: false,
        message: "Slot already booked",
      };
    }

    // Bug:3 - the booking should be added to the teacher's booking collection, not the global bookings collection.
    // Bug:4 - this is an asynchronous operation, so we should use await to ensure it completes before returning a success response 
    await teacherRef.collection("bookings").add(booking); 
    return { success: true };
  }
);