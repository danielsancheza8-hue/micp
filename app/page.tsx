"use client";

import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

import Navbar from "@/components/layout/Navbar";
import VocationalTest from "@/components/test/VocationalTest";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) return <p className="text-center mt-20">Cargando...</p>;

  if (!user) {
    window.location.href = "/login";
    return null;
  }

  return (
    <>
      <Navbar />
      <VocationalTest />
    </>
  );
}