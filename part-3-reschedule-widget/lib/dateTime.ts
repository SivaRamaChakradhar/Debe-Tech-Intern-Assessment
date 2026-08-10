// 2hours converted to milliseconds
export const MINIMUM_RESCHEDULE_NOTICE_MS = 2 * 60 * 60 * 1000

/* 
  check if a selected date/time falls within the forbidden 2-hour lead-time windo.
*/

export const isWithinRescheduleLockout = (selectedDateTime: Date, now: Date = new Date()): boolean => {
    const minimumAllowedTime = now.getTime() + MINIMUM_RESCHEDULE_NOTICE_MS

    //Return true if the selected time is in the past or less than 2 hours from now.
    return selectedDateTime.getTime() < minimumAllowedTime
}

//get parents local time
export const getBrowserTimeZoneOffset = (): string => {
  const offsetMinutes = new Date().getTimezoneOffset();
  const absMinutes = Math.abs(offsetMinutes);
  const hours = String(Math.floor(absMinutes/60)).padStart(2, '0');
  const minutes = String(absMinutes%60).padStart(2, '0');
  const sign = offsetMinutes <= 0 ? '+':'-';
  return `${sign}${hours}:${minutes}`
} 

//convert parent local time zone into standardized UTC ISO string
export const localDateTimeToUTC = (date: string, time: string, timezoneOffset: string,): string => {
  const localDateTime = new Date(
    `${date}T${time}:00${timezoneOffset}`,
  );

  if (Number.isNaN(localDateTime.getTime())) {
    throw new Error("Invalid date or time.");
  }

  return localDateTime.toISOString();
};