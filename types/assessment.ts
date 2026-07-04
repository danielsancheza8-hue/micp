export interface Option {
  id: string;
  text: string;
  value: number;
}

export interface Question {
  id: string;
  text: string;
  dimension: string;
  options: Option[];
}

export interface Answer {
  questionId: string;
  value: number;
  timeSpent: number;
  changed: boolean;
}

export interface AssessmentState {
  currentQuestion: number;
  startedAt: Date;
  finishedAt?: Date;
  answers: Answer[];
}