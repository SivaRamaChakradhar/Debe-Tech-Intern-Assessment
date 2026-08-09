export type sessionType = "confirmed" | "pending" | "cancelled";

export interface TutoringSession {
    id: string;
    subject: string;
    teacherName: string;
    datetime: string;
    status: sessionType;
}