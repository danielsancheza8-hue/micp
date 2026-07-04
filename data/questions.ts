import { Question } from "@/types/assessment";

export const questions: Question[] = [
  {
    id: "Q001",
    text: "Prefiero resolver problemas complejos antes que realizar tareas repetitivas.",
    dimension: "Intereses",
    options: [
      { id: "1", text: "Totalmente en desacuerdo", value: 1 },
      { id: "2", text: "En desacuerdo", value: 2 },
      { id: "3", text: "Neutral", value: 3 },
      { id: "4", text: "De acuerdo", value: 4 },
      { id: "5", text: "Totalmente de acuerdo", value: 5 },
    ],
  },

  {
    id: "Q002",
    text: "Disfruto aprender cosas nuevas continuamente.",
    dimension: "Aprendizaje",
    options: [
      { id: "1", text: "Totalmente en desacuerdo", value: 1 },
      { id: "2", text: "En desacuerdo", value: 2 },
      { id: "3", text: "Neutral", value: 3 },
      { id: "4", text: "De acuerdo", value: 4 },
      { id: "5", text: "Totalmente de acuerdo", value: 5 },
    ],
  },

  {
    id: "Q003",
    text: "Me siento cómodo tomando decisiones importantes.",
    dimension: "Personalidad",
    options: [
      { id: "1", text: "Totalmente en desacuerdo", value: 1 },
      { id: "2", text: "En desacuerdo", value: 2 },
      { id: "3", text: "Neutral", value: 3 },
      { id: "4", text: "De acuerdo", value: 4 },
      { id: "5", text: "Totalmente de acuerdo", value: 5 },
    ],
  },
];