export type RescheduleReason =
  | "CONFLICT"
  | "ILLNESS"
  | "TIME_ZONE"
  | "OTHER";

export interface RescheduleRequest {
  sessionId: string;
  newDateTimeUtc: string;
  reason: RescheduleReason;
}

export interface RescheduleResponse {
  success: boolean;
  message: string;
}