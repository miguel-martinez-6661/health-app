export interface GoogleFitResponse {
  rawSteps: number;
  source: string;
  steps: [];
}
export interface HealthState {
  permissionGranted: boolean;
  stepCount: number;
  isError?: boolean;
}
