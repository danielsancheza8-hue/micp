import { profiles } from "@/data/profiles";

export function interpretScores(
  scores: Record<string, number>
) {
  let bestDimension = "";
  let highestScore = -1;

  for (const [dimension, score] of Object.entries(scores)) {
    if (score > highestScore) {
      highestScore = score;
      bestDimension = dimension;
    }
  }

  return {
  scores,
  dominantProfile:
    profiles[bestDimension as keyof typeof profiles],
};
}