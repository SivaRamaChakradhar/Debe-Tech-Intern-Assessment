"use client";

const today = new Date().toISOString().split("T")[0]

import { TutoringSession } from '@/types/session';
import { validateRescheduleTime } from "@/lib/validation";
import { localDateTimeToUTC } from '@/lib/dateTime';
import { RescheduleReason } from '@/types/reschedule';
import { useState } from 'react';

interface RescheduleFormProps {
  session: TutoringSession;
  onCancel: () => void;
}

const reasons: {
  id: RescheduleReason;
  displayName: string;
}[] = [
  { id: "CONFLICT", displayName: "Conflict" },
  { id: "ILLNESS", displayName: "Illness" },
  { id: "TIME_ZONE", displayName: "Time zone" },
  { id: "OTHER", displayName: "Other" },
];

export const RescheduleForm = ({ session, onCancel }: RescheduleFormProps) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState<RescheduleReason | "">("");;
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>,) => {
    event.preventDefault();

    setError("");

    if (!date || !time || !reason) {
      setError("Please complete all fields.");
      return;
    }

    try {
      const utcDateTime = localDateTimeToUTC(
        date,
        time,
        "+05:30",
      );

      const selectedDateTime = new Date(utcDateTime);
      const currentSessionDateTime = new Date(
        session.datetime,
      );

      const validationError = validateRescheduleTime({
        selectedDateTime,
        currentSessionDateTime,
      });

      if (validationError) {
        setError(validationError);
        return;
      }

      console.log("Valid reschedule:", {
        sessionId: session.id,
        date,
        time,
        reason,
        utcDateTime,
      });
    } catch (error) {
      console.error("Failed to prepare reschedule:", error);
      setError("Unable to process the selected date and time.");
    }
  };

  return (
    <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold text-gray-900">
        Request Reschedule
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="date"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            New date
          </label>

          <input
            id="date"
            type="date"
            min={today}
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            className="w-full rounded-lg border text-black border-gray-300 px-3 py-2 outline-none focus:border-black"
          />
        </div>

        <div>
          <label
            htmlFor="time"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            New time
          </label>

          <input
            id="time"
            type="time"
            value={time}
            onChange = {e => setTime(e.target.value)}
            className="w-full rounded-lg border text-black border-gray-300 px-3 py-2 outline-none focus:border-black"
          />
        </div>

        <div>
          <label
            htmlFor="reason"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Reason
          </label>

          <select
            id="reason"
            value={reason}
            onChange = {e => setReason(e.target.value as RescheduleReason)}
            className="text-black w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black"
          >
            <option value="" disabled>
              Select a reason
            </option>

            {reasons.map((reason) => (
              <option key={reason.id} value={reason.id}>
                {reason.displayName}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3">
          <p className="text-sm text-gray-500">
            Rescheduled sessions must be at least 2 hours from now.
          </p>
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Request Reschedule
          </button>
        </div>
        {error && (<p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>)}
      </form>
    </div>
  );
};