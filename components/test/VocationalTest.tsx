"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const questions = [
  {
    id: 1,
    question: "¿Qué actividad disfrutas más?",
    options: [
      { text: "Resolver problemas matemáticos", value: "tech" },
      { text: "Ayudar a otras personas", value: "social" },
      { text: "Crear cosas artísticas", value: "art" },
      { text: "Investigar y leer", value: "research" }
    ]
  },
  {
    id: 2,
    question: "¿Cómo prefieres trabajar?",
    options: [
      { text: "Con tecnología o sistemas", value: "tech" },
      { text: "Con personas", value: "social" },
      { text: "De forma creativa", value: "art" },
      { text: "Analizando datos", value: "research" }
    ]
  },
  {
    id: 3,
    question: "¿Qué te motiva más?",
    options: [
      { text: "Innovación tecnológica", value: "tech" },
      { text: "Impacto social", value: "social" },
      { text: "Expresión artística", value: "art" },
      { text: "Descubrir conocimiento", value: "research" }
    ]
  }
];

export default function VocationalTest() {
  const [step, setStep] = useState(0);

  const [scores, setScores] = useState({
    tech: 0,
    social: 0,
    art: 0,
    research: 0
  });

  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[step];

  const progress = (step / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newScores = { ...scores };
    newScores[value as keyof typeof scores] += 1;
    setScores(newScores);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  const getResult = () => {
    const max = Object.entries(scores).reduce((a, b) =>
      a[1] > b[1] ? a : b
    );

    const map: any = {
      tech: {
        title: "Tecnología / Ingeniería",
        description:
          "Perfil lógico y estructurado. En Colombia es uno de los campos con mayor demanda laboral.",
        why:
          "Tus respuestas muestran pensamiento analítico, interés por sistemas y resolución de problemas.",
        careers: [
          {
            name: "Ingeniería de Sistemas",
            universities: [
              "Universidad Nacional de Colombia",
              "Universidad de los Andes",
              "Universidad del Valle"
            ],
            jobs: [
              "Desarrollador de software",
              "Ingeniero de sistemas",
              "Analista de datos"
            ]
          },
          {
            name: "Ingeniería Electrónica",
            universities: [
              "Universidad Nacional de Colombia",
              "Universidad Industrial de Santander"
            ],
            jobs: [
              "Automatización",
              "Telecomunicaciones",
              "Robótica"
            ]
          }
        ]
      },

      social: {
        title: "Ciencias de la Salud y Sociales",
        description:
          "Perfil humano, empático y orientado al bienestar de otros.",
        why:
          "Tus elecciones reflejan empatía, comunicación y vocación de servicio.",
        careers: [
          {
            name: "Medicina",
            universities: [
              "Universidad Nacional de Colombia",
              "Universidad de Antioquia",
              "Universidad Javeriana"
            ],
            jobs: [
              "Médico general",
              "Especialista médico",
              "Investigación clínica"
            ]
          },
          {
            name: "Psicología",
            universities: [
              "Universidad de los Andes",
              "Universidad Javeriana",
              "Universidad del Rosario"
            ],
            jobs: [
              "Psicólogo clínico",
              "Psicólogo organizacional",
              "Orientador educativo"
            ]
          }
        ]
      },

      art: {
        title: "Arte, Diseño y Creatividad",
        description:
          "Perfil creativo con sensibilidad estética y pensamiento visual.",
        why:
          "Muestras creatividad, imaginación y pensamiento divergente.",
        careers: [
          {
            name: "Diseño Gráfico",
            universities: [
              "Universidad Nacional de Colombia",
              "Universidad Jorge Tadeo Lozano",
              "Universidad del Valle"
            ],
            jobs: [
              "Diseñador gráfico",
              "Director creativo",
              "Branding y marketing"
            ]
          },
          {
            name: "Arquitectura",
            universities: [
              "Universidad de los Andes",
              "Universidad Nacional de Colombia"
            ],
            jobs: [
              "Arquitecto",
              "Diseño urbano",
              "Modelado 3D"
            ]
          }
        ]
      },

      research: {
        title: "Investigación y Ciencias",
        description:
          "Perfil analítico, curioso y orientado al conocimiento profundo.",
        why:
          "Muestras interés por comprender cómo funcionan los sistemas.",
        careers: [
          {
            name: "Biología",
            universities: [
              "Universidad Nacional de Colombia",
              "Universidad de Antioquia"
            ],
            jobs: [
              "Investigador",
              "Laboratorio clínico",
              "Ciencia ambiental"
            ]
          },
          {
            name: "Economía",
            universities: [
              "Universidad de los Andes",
              "Universidad Javeriana"
            ],
            jobs: [
              "Analista financiero",
              "Economista",
              "Consultoría"
            ]
          }
        ]
      }
    };

    return map[max[0] as keyof typeof map];
  };

  if (finished) {
    const result = getResult();

    return (
      <div className="text-center mt-16 max-w-2xl mx-auto">

        <h2 className="text-3xl font-bold">
          Tu perfil vocacional
        </h2>

        <div className="mt-6 p-6 border rounded-xl bg-white shadow-sm text-left">

          <h3 className="text-xl font-semibold">
            {result.title}
          </h3>

          <p className="mt-3 text-gray-600">
            {result.description}
          </p>

          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              🔎 ¿Por qué este resultado?
            </p>
            <p className="text-gray-600">
              {result.why}
            </p>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              🎓 Carreras recomendadas en Colombia
            </p>

            <ul className="mt-3 space-y-4 text-gray-600">
              {result.careers.map((career: any) => (
                <li key={career.name} className="border p-3 rounded-lg">

                  <p className="font-semibold">
                    {career.name}
                  </p>

                  <p className="text-sm mt-1">
                    🎓 Universidades: {career.universities.join(", ")}
                  </p>

                  <p className="text-sm mt-1">
                    💼 Salidas: {career.jobs.join(", ")}
                  </p>

                </li>
              ))}
            </ul>
          </div>

        </div>

        <Button
          onClick={() => {
            setStep(0);
            setScores({
              tech: 0,
              social: 0,
              art: 0,
              research: 0
            });
            setFinished(false);
          }}
        >
          Volver a hacer el test
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-16 text-center">

      {/* Barra de progreso */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h2 className="text-xl font-semibold">
        {currentQuestion.question}
      </h2>

      <div className="mt-6 space-y-3">
        {currentQuestion.options.map((option) => (
          <Button
            key={option.text}
            onClick={() => handleAnswer(option.value)}
          >
            {option.text}
          </Button>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Pregunta {step + 1} de {questions.length}
      </p>
    </div>
  );
}