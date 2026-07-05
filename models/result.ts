import { Profile } from "./profile";

export interface AssessmentResult {
  scores: Record<string, number>;
  dominantProfile: Profile;
}