import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <h1 className="max-w-4xl text-5xl font-extrabold leading-tight">
        Descubre una carrera alineada con tu verdadero potencial
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        El MICP combina psicometría basada en evidencia e inteligencia
        artificial para ayudarte a comprender tus fortalezas,
        motivaciones y compatibilidad profesional.
      </p>

      <div className="mt-10 flex gap-4">
        <Button>
          Comenzar evaluación
        </Button>

        <Button variant="secondary">
          Cómo funciona
        </Button>
      </div>
    </section>
  );
}