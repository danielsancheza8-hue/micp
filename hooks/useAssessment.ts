import { useState } from "react";
import { questions } from "@/data/questions";

export function useAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<Record<string, number>>({});
  
  const [finished, setFinished] = useState(false);

  const totalQuestions = questions.length;

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  function selectAnswer(value: number) {
    const questionId = questions[currentQuestion].id;
    
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  }

  function nextQuestion() {
  if (currentQuestion < totalQuestions - 1) {
    setCurrentQuestion((prev) => prev + 1);
  } else {
    setFinished(true);
  }
}

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  const isFirstQuestion = currentQuestion === 0;

  const isLastQuestion = currentQuestion === totalQuestions - 1;

  const hasAnsweredCurrentQuestion =
    answers[questions[currentQuestion].id] !== undefined;

  const isCompleted =
    Object.keys(answers).length === totalQuestions;

  return {
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

    isCompleted,
    
    hasAnsweredCurrentQuestion,

    finished,
  };
}