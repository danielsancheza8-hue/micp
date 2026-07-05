import { AssessmentResult } from "@/models/result";
import { getCareerRecommendations } from "@/services/recommendations";

type ResultsProps = {
  result: AssessmentResult;
};

export default function Results({ result }: ResultsProps) {
  const { scores, dominantProfile } = result;

  const careers = getCareerRecommendations(dominantProfile);

  return (
    <div className="mx-auto max-w-4xl p-8">

      <h1 className="mb-8 text-3xl font-bold">
        Resultados preliminares
      </h1>

      <section className="mb-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-2xl font-semibold text-blue-600">
          {dominantProfile.title}
        </h2>

        <p className="text-gray-700">
          {dominantProfile.description}
        </p>
      </section>

      <section className="mb-10">
        <h3 className="mb-4 text-xl font-semibold">
          Puntajes obtenidos
        </h3>

        <div className="space-y-3">
          {Object.entries(scores).map(([dimension, score]) => (
            <div
              key={dimension}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <span>{dimension}</span>

              <span className="font-bold text-blue-600">
                {score}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="mb-4 text-xl font-semibold">
          Fortalezas identificadas
        </h3>

        <ul className="list-disc space-y-2 pl-6">
          {dominantProfile.strengths.map((strength) => (
            <li key={strength}>
              {strength}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold">
          Carreras recomendadas
        </h3>

        <div className="space-y-4">
          {careers.map((career) => (
            <div
              key={career.id}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">

                <div>
                  <h4 className="text-lg font-semibold">
                    {career.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {career.category}
                  </p>
                </div>

                <div className="rounded-full bg-blue-100 px-4 py-2 font-bold text-blue-700">
                  {career.compatibility}%
                </div>

              </div>

              <p className="mt-4 text-gray-700">
                {career.description}
              </p>

              <p className="mt-3 text-sm font-medium">
                Duración: {career.duration}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}