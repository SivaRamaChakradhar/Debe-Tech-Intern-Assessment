import { TutoringSession } from "../types/session";

interface sessionCardProps {
    session: TutoringSession;
}

export const SessionCard = ({ session }: sessionCardProps) => {
    const date = new Date(session.datetime);

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
                <span className="font-medium">Date:</span>{" "}
                {date.toLocaleDateString()}
                </p>

                <p>
                <span className="font-medium">Time:</span>{" "}
                {date.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                })}
                </p>

                <p>
                <span className="font-medium">Status:</span>{" "}
                {session.status}
                </p>
            </div>

            <button
                type="button"
                className="mt-5 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
                Request Reschedule
            </button>
        </article>
    )
}