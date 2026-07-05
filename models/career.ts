export interface Career {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  skills: string[];

  profileWeights: {
    Intereses: number;
    Aprendizaje: number;
    Personalidad: number;
  };
}