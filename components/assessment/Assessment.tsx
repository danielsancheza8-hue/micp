"use client";

import { useAssessment } from "@/hooks/useAssessment";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import Navigation from "./Navigation";
import Results from "./Results";

import { calculateScores } from "@/services/scoring";
import { interpretScores } from "@/services/interpreter";

export default function Assessment() {
  const {
    questions,
    currentQuestion,
    totalQuestions,
    progress,
    answers,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    isFirstQuestion,
    isLastQuestion,
    hasAnsweredCurrentQuestion,
    finished,
  } = useAssessment();

  const question = questions[currentQuestion];

  const scores = calculateScores(answers);

  const result = interpretScores(scores);

  if (finished) {
    return <Results result={result} />;
  }

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="mb-6 text-3xl font-bold">
        Evaluación MICP
      </h1>

      <p className="mb-2">
        Pregunta {currentQuestion + 1} de {totalQuestions}
      </p>

      <ProgressBar progress={progress} />

      <QuestionCard
        question={question}
        selectedAnswer={answers[question.id]}
        onSelect={selectAnswer}
      />

      <Navigation
        isFirstQuestion={isFirstQuestion}
        isLastQuestion={isLastQuestion}
        canGoNext={hasAnsweredCurrentQuestion}
        onPrevious={previousQuestion}
        onNext={nextQuestion}
      />

    </div>
  );
}