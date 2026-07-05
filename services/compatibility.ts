import { careers } from "@/data/careers";

export interface CareerCompatibility {
  careerId: string;
  careerName: string;
  compatibility: number;
}

export function calculateCompatibility(
  scores: Record<string, number>
): CareerCompatibility[] {

  const results = careers.map((career) => {

    const total =
      scores.Intereses * career.profileWeights.Intereses +
      scores.Aprendizaje * career.profileWeights.Aprendizaje +
      scores.Personalidad * career.profileWeights.Personalidad;

    return {
      careerId: career.id,
      careerName: career.name,
      compatibility: total,
    };

  });

  return results.sort(
    (a, b) => b.compatibility - a.compatibility
  );
}