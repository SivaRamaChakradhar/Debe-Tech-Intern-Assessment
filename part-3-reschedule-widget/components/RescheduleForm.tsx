"use client";

import { useState } from 'react';

interface RescheduleFormProps {
  onCancel: () => void;
}

const reasons = [
  { id: "CONFLICT", displayName: "Conflict" },
  { id: "ILLNESS", displayName: "Illness" },
  { id: "TIME_ZONE", displayName: "Time zone" },
  { id: "OTHER", displayName: "Other" },
];

export const RescheduleForm = ({ onCancel }: RescheduleFormProps) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");

  return (
    <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold text-gray-900">
        Request Reschedule
      </h2>

      <form className="space-y-5">
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
            onChange = {e => setReason(e.target.value)}
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
      </form>
    </div>
  );
};