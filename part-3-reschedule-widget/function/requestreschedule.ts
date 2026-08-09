import { RescheduleRequest, RescheduleResponse } from "@/types/reschedule";
import { validateRescheduleTime } from "@/lib/validation";
import { upcomingSessions } from "@/lib/mockSessions";

export const requestReschedule = async (request: RescheduleRequest,): Promise<RescheduleResponse> => {
  const session = upcomingSessions.find(
    (item) => item.id === request.sessionId,
  );

  if (!session) {
    return {
      success: false,
      message: "Session not found.",
    };
  }

  const newDateTime = new Date(request.newDateTimeUtc);
  const currentSessionDateTime = new Date(session.datetime);

  const validationError = validateRescheduleTime({
    selectedDateTime: newDateTime,
    currentSessionDateTime,
  });

  if (validationError) {
    return {
      success: false,
      message: validationError,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: "Reschedule request submitted successfully.",
  };
};