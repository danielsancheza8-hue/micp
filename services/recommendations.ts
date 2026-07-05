import { careers } from "@/data/careers";
import { Profile } from "@/models/profile";

export function getCareerRecommendations(profile: Profile) {
  return careers
    .filter((career) => profile.careerIds.includes(career.id))
    .map((career) => ({
      ...career,
      compatibility: Math.round(
        (
          career.profileWeights.Intereses +
          career.profileWeights.Aprendizaje +
          career.profileWeights.Personalidad
        ) /
          3 *
          10
      ),
    }))
    .sort((a, b) => b.compatibility - a.compatibility);
}