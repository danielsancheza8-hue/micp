import { Profile } from "@/models/profile";

export const profiles: Record<string, Profile> = {
  Intereses: {
    id: "intereses",
    title: "Investigador",
    description:
      "Disfrutas comprender problemas complejos, analizar información y aprender constantemente.",

    strengths: [
      "Pensamiento analítico",
      "Curiosidad intelectual",
      "Resolución de problemas",
    ],

    careerIds: [
      "medicine",
      "biomedical_engineering",
      "psychology",
    ],
  },

  Aprendizaje: {
    id: "aprendizaje",
    title: "Aprendiz Permanente",
    description:
      "Te adaptas fácilmente a nuevos conocimientos y disfrutas desarrollar nuevas habilidades.",

    strengths: [
      "Adaptabilidad",
      "Aprendizaje autónomo",
      "Disciplina",
    ],

    careerIds: [
      "medicine",
      "psychology",
      "biomedical_engineering",
    ],
  },

  Personalidad: {
    id: "personalidad",
    title: "Líder",
    description:
      "Tiendes a asumir responsabilidades y tomar decisiones con seguridad.",

    strengths: [
      "Confianza",
      "Comunicación",
      "Toma de decisiones",
    ],

    careerIds: [
      "medicine",
      "psychology",
    ],
  },
};