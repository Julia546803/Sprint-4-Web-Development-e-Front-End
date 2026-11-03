"use client";

import {createContext, useContext, useState, useEffect,} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarSessao = () => {
      const usuarioSalvo = sessionStorage.getItem("usuarioLogado");

      setUsuarioLogado(usuarioSalvo);
      setCarregando(false);
    };

    const timer = setTimeout(carregarSessao, 0);

    return () => clearTimeout(timer);
  }, []);

  function fazerLogin(usuario) {
    sessionStorage.setItem("usuarioLogado", usuario);
    setUsuarioLogado(usuario);
  }

  function fazerLogout() {
    sessionStorage.removeItem("usuarioLogado");
    setUsuarioLogado(null);
  }

  return (
    <AuthContext.Provider
      value={{
        usuarioLogado,
        carregando,
        fazerLogin,
        fazerLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth deve ser utilizado dentro de AuthProvider"
    );
  }
  return context;
}