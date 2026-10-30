"use client";

import { useState } from "react";

import StatusBar from "./components/StatusBar";
import HomeScreen from "./components/home/HomeScreen";
import CameraScreen from "./components/camera/CameraScreen";
import LoginScreen from "./components/login/LoginScreen";

export default function Home() {
  const [logado, setLogado] = useState(false);
  const [cameraAberta, setCameraAberta] = useState(false);

  function fazerLogin() {
    setLogado(true);
  }

  function abrirCamera() {
    setCameraAberta(true);
  }

  function fecharCamera() {
    setCameraAberta(false);
  }

  if (!logado) {
    return (
      <LoginScreen onLogin={fazerLogin} />
    );
  }

  return (
    <main className="phone">

      <StatusBar />

      {!cameraAberta ? (
        <HomeScreen onOpenCamera={abrirCamera} />
      ) : (
        <CameraScreen onCloseCamera={fecharCamera} />
      )}

    </main>
  );
}