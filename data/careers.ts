import { Career } from "@/models/career";

export const careers: Career[] = [
  {
    id: "medicine",
    name: "Medicina",
    category: "Salud",
    description:
      "Diagnóstico, tratamiento y prevención de enfermedades.",
    duration: "6 años",
    skills: [
      "Empatía",
      "Análisis",
      "Responsabilidad",
      "Trabajo en equipo",
    ],
    profileWeights: {
      Intereses: 10,
      Aprendizaje: 9,
      Personalidad: 7,
    },
  },

  {
    id: "psychology",
    name: "Psicología",
    category: "Salud",
    description:
      "Estudio del comportamiento humano.",
    duration: "5 años",
    skills: [
      "Escucha",
      "Empatía",
      "Comunicación",
    ],
    profileWeights: {
      Intereses: 8,
      Aprendizaje: 9,
      Personalidad: 9,
    },
  },

  {
    id: "biomedical_engineering",
    name: "Ingeniería Biomédica",
    category: "Ingeniería",
    description:
      "Ingeniería aplicada a la medicina.",
    duration: "5 años",
    skills: [
      "Matemáticas",
      "Programación",
      "Creatividad",
    ],
    profileWeights: {
      Intereses: 10,
      Aprendizaje: 8,
      Personalidad: 5,
    },
  },
];