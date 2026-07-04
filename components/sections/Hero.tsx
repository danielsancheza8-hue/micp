import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Conecta clientes con servicios en segundos
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          MICP es una plataforma donde encuentras profesionales y servicios confiables cerca de ti, rápido y sin complicaciones.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button>
            Explorar servicios
          </Button>

          <Button>
            Ofrecer un servicio
          </Button>
        </div>

      </div>
    </section>
  );
}