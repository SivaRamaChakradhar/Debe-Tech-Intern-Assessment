import { SessionCard } from "@/components/SessionCard";
import { upcomingSessions } from "@/lib/mockSessions";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <p className="text-sm font-medium text-gray-500">
            Tutoring Portal
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Upcoming Sessions
          </h1>

          <p className="mt-2 text-gray-600">
            View your upcoming tutoring sessions and request a
            reschedule when needed.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          {upcomingSessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </section>
      </div>
    </main>
  );
}