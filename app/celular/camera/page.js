"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../contexts/AuthContext";
import StatusBar from "../../components/StatusBar";
import CameraScreen from "../../components/camera/CameraScreen";

export default function CameraPage() {
  const router = useRouter();

  const { usuarioLogado, carregando } = useAuth();

  // VERIFICAR SE O USUÁRIO ESTÁ LOGADO
  useEffect(() => {
    if (!carregando && !usuarioLogado) {
      router.replace("/login");
    }
  }, [carregando, usuarioLogado, router]);

  // VOLTAR PARA A TELA INICIAL
  function fecharCamera() {
    router.push("/celular");
  }

  // AGUARDAR CARREGAMENTO DA SESSÃO
  if (carregando || !usuarioLogado) {
    return null;
  }

  return (
    <main className="relative h-[820px] w-96 max-w-full overflow-hidden rounded-phone border-8 border-phone-border bg-black shadow-xl">
      {/* BARRA DE STATUS */}
      <StatusBar />

      {/* TELA DA CÂMERA */}
      <CameraScreen onCloseCamera={fecharCamera} />
    </main>
  );
}