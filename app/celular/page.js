"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../contexts/AuthContext";
import StatusBar from "../components/StatusBar";
import HomeScreen from "../components/home/HomeScreen";

export default function CelularPage() {
  const router = useRouter();

  const { usuarioLogado, carregando, fazerLogout } = useAuth();

  // VERIFICAR SE O USUÁRIO ESTÁ LOGADO
  useEffect(() => {
    if (!carregando && !usuarioLogado) {
      router.replace("/login");
    }
  }, [carregando, usuarioLogado, router]);

  // ABRIR A CÂMERA
  function abrirCamera() {
    router.push("/celular/camera");
  }

  // ABRIR A LISTA DE CONTATOS
  function abrirContatos() {
    router.push("/celular/contatos");
  }

  // SAIR DA CONTA
  function sairDaConta() {
    fazerLogout();
    router.replace("/login");
  }

  // AGUARDAR CARREGAMENTO DA SESSÃO
  if (carregando || !usuarioLogado) {
    return null;
  }

  return (
    <main className="relative h-[820px] w-96 max-w-full overflow-hidden rounded-phone border-8 border-phone-border bg-black shadow-xl">
      {/* BARRA DE STATUS */}
      <StatusBar />

      {/* TELA INICIAL */}
      <HomeScreen
        onOpenCamera={abrirCamera}
        onOpenContacts={abrirContatos}
      />

      {/* BOTÃO SAIR */}
      <button
        type="button"
        onClick={sairDaConta}
        className="absolute top-12 right-4 z-50 cursor-pointer rounded-button bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500"
      >
        Sair
      </button>
    </main>
  );
}