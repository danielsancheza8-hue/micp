type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  return (
    <div className="mb-8">

      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>Progreso</span>

        <span>{Math.round(progress)}%</span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">

        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}