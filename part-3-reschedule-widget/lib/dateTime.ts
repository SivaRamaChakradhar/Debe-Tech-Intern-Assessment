export const MINIMUM_RESCHEDULE_NOTICE_MS = 2 * 60 * 60 * 1000

export const isWithinRescheduleLockout = (selectedDateTime: Date, now: Date = new Date()): boolean => {
    const minimumAllowedTime = now.getTime() + MINIMUM_RESCHEDULE_NOTICE_MS

    return selectedDateTime.getTime() < minimumAllowedTime
}

export const localDateTimeToUTC = (date: string, time: string, timezoneOffset: string,): string => {
  const localDateTime = new Date(
    `${date}T${time}:00${timezoneOffset}`,
  );

  if (Number.isNaN(localDateTime.getTime())) {
    throw new Error("Invalid date or time.");
  }

  return localDateTime.toISOString();
};