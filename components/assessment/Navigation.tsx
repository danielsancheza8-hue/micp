type NavigationProps = {
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export default function Navigation({
  isFirstQuestion,
  isLastQuestion,
  canGoNext,
  onPrevious,
  onNext,
}: NavigationProps) {
  return (
    <div className="mt-8 flex justify-between">

      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        ← Anterior
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLastQuestion ? "Finalizar" : "Siguiente →"}
      </button>

    </div>
  );
}