import { TutoringSession } from "../types/session";

export const upcomingSessions: TutoringSession[] = [
    {
        id: "session-1",
        subject: "Mathematics",
        teacherName: "Sarah Johnson",
        datetime: "2026-08-10T22:00:00+05:30",
        status: "confirmed",
    },
    {
        id: "session-2",
        subject: "Physics",
        teacherName: "David Smith",
        datetime: "2026-08-14T18:30:00+05:30",
        status: "confirmed",
    },
    {
        id: "session-3",
        subject: "English",
        teacherName: "Emily Wilson",
        datetime: "2026-08-17T16:00:00+05:30",
        status: "pending",
    },
]