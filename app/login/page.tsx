"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    setLoading(true);

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      window.location.href = "/";
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl bg-white">

      <h1 className="text-2xl font-bold text-center mb-6">
        {isRegister ? "Crear cuenta" : "Iniciar sesión"}
      </h1>

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleAuth} disabled={loading}>
        {loading
          ? "Cargando..."
          : isRegister
          ? "Registrarse"
          : "Entrar"}
      </Button>

      <p
        className="mt-4 text-sm text-center text-blue-600 cursor-pointer"
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister
          ? "¿Ya tienes cuenta? Inicia sesión"
          : "¿No tienes cuenta? Créala aquí"}
      </p>

    </div>
  );
}