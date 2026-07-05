type Option = {
  id: string;
  text: string;
  value: number;
};

type QuestionCardProps = {
  question: {
    text: string;
    options: Option[];
  };
  selectedAnswer?: number;
  onSelect: (value: number) => void;
};

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        {question.text}
      </h2>

      <div className="space-y-3">

        {question.options.map((option) => (

          <button
            key={option.id}
            onClick={() => onSelect(option.value)}
            className={`w-full rounded-xl border p-4 text-left transition-all

              ${
                selectedAnswer === option.value
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 hover:border-blue-300 hover:bg-gray-50"
              }
            `}
          >
            {option.text}
          </button>

        ))}

      </div>

    </div>
  );
}