# Session Reschedule Widget

A small, self-contained Next.js + TypeScript feature that simulates a parent-facing tutoring session rescheduling workflow.

## Overview

The widget allows a parent to:

- View the student's next three upcoming tutoring sessions.
- Open a reschedule form for a specific session.
- Select a new date and time.
- Choose a reschedule reason.
- Submit a reschedule request through a locally mocked Firebase Cloud Function.

## Key Requirements Implemented

### Two-hour reschedule lockout

Reschedule slots must be at least two hours from the current time. This reflects a tutoring lead-time policy and is enforced during validation.

### Local time and UTC storage

The parent enters the new session time in their local timezone. Before the request is sent to the backend, the local date/time is converted into an unambiguous UTC ISO timestamp.

For example:

```text
5:50 PM IST
     ↓
12:20 PM UTC
```

This prevents the backend from interpreting an ambiguous local time incorrectly.

### Backend validation

The frontend validates the request for immediate feedback, but the mocked Cloud Function validates the request again before accepting it. This prevents the business rules from relying only on client-side validation.

### TypeScript

Shared TypeScript types are used for:

- Tutoring sessions
- Reschedule reasons
- Reschedule requests
- Reschedule responses

No `any` is used.

### Loading and error states

The UI handles asynchronous submission with:

- Loading state
- Success state
- Validation errors
- Unexpected request failures
- Disabled form controls during submission

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js App Router

## Project Structure

```text
app/
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── SessionCard.tsx
└── RescheduleForm.tsx

functions/
└── requestReschedule.ts

lib/
├── datetime.ts
├── mockSessions.ts
└── validation.ts

types/
├── session.ts
└── reschedule.ts
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Run the production build:

```bash
npm run build
```

## Video Walkthrough

Loom video:

-[https://www.loom.com/share/17623e6647db4aff9644ba4621cfab01](URL)

The walkthrough explains the implementation, including the two-hour lockout, local-time/UTC decision, validation flow, and an intentional timezone-conversion bug demonstration.

## Notes

This project uses mock session data and a local mock Cloud Function. No real Firebase project or deployment is required.
