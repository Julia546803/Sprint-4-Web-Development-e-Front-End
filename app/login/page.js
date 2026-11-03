"use client";

import { useRouter } from "next/navigation";
import LoginScreen from "../components/login/LoginScreen";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin() {
    router.replace("/celular");
  }

  return <LoginScreen onLogin={handleLogin} />;
}