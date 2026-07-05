import { questions } from "@/data/questions";

export function calculateScores(
  answers: Record<string, number>
) {
  const scores: Record<string, number> = {};

  for (const question of questions) {
    const answer = answers[question.id];

    if (answer === undefined) continue;

    if (!scores[question.dimension]) {
      scores[question.dimension] = 0;
    }

    scores[question.dimension] += answer;
  }

  return scores;
}