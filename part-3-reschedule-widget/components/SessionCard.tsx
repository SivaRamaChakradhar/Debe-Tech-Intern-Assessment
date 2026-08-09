"use client"

import { useState } from 'react';

import { TutoringSession } from "../types/session";

interface sessionCardProps {
    session: TutoringSession;
    onReschedule: () => void;
}

export const SessionCard = ({ session, onReschedule }: sessionCardProps) => {
    const date = new Date(session.datetime);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(date);

    const formattedTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
    }).format(date);

    return (
        <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                {session.subject}
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                Teacher: {session.teacherName}
                </p>
            </div>

            <div className="space-y-2 text-sm text-gray-700">
                <p>
                <span className="font-medium">Date:</span>{formattedDate}
                </p>

                <p>
                <span className="font-medium">Time:</span>{formattedTime}
                </p>

                <p>
                    <span className="font-medium">Status:</span>{" "}{session.status}
                </p>
            </div>

            <button
                type="button"
                className="mt-5 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                onClick={onReschedule}
            >
                Request Reschedule
            </button>
        </article>
    )
}