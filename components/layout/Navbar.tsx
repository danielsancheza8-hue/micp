import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-blue-600">
          MICP
        </div>

        <Button>
          Comenzar
        </Button>
      </div>
    </header>
  );
}