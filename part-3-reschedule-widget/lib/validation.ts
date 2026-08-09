import { isWithinRescheduleLockout } from "@/lib/dateTime";

interface RescheduleValidationInput {
  selectedDateTime: Date;
  currentSessionDateTime: Date;
  now?: Date;
}

export const validateRescheduleTime = ({ selectedDateTime, currentSessionDateTime, now = new Date(),}: RescheduleValidationInput): string | null => {
  if (Number.isNaN(selectedDateTime.getTime())) {
    return "Please select a valid date and time.";
  }
  if (
    selectedDateTime.getTime() ===
    currentSessionDateTime.getTime()
  ) {
    return "The new time must be different from the current session time.";
  }

  if (
    isWithinRescheduleLockout(
      selectedDateTime,
      now,
    )
  ) {
    return "Please select a time at least 2 hours from now.";
  }


  return null;
};