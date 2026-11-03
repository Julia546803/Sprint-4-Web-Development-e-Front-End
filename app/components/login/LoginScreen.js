"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginScreen({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const { fazerLogin } = useAuth();

  // USUÁRIOS AUTORIZADOS 
  const usuarios = [
    { usuario: "Pedro", senha: "572549" },
    { usuario: "Julia", senha: "569203" },
    { usuario: "Matheus", senha: "571719" },
    { usuario: "Guilherme", senha: "570835" },
    { usuario: "Tester", senha: "123456" },
  ];

  function handleSubmit(event) {
    event.preventDefault();

    // VERIFICAR CAMPOS VAZIOS
    if (usuario.trim() === "" || senha === "") {
      setErro("Preencha todos os campos!");
      return;
    }

    // PROCURAR USUÁRIO E SENHA
    const usuarioEncontrado = usuarios.find(
      (item) =>
        item.usuario === usuario &&
        item.senha === senha
    );

    // LOGIN INCORRETO
    if (!usuarioEncontrado) {
      setErro("Usuário ou senha incorretos!");
      return;
    }

    // LOGIN CORRETO
    setErro("");
    fazerLogin(usuarioEncontrado.usuario);
    onLogin();
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background px-space-md py-space-xl text-white">

      <div className="w-full max-w-md">

        {/* VOLTAR PARA A LANDING PAGE */}
        <Link
          href="/"
          className="mb-space-xl inline-flex items-center gap-space-sm text-sm text-slate-400 transition hover:text-blue-400"
        >
          <span aria-hidden="true">←</span>
          Voltar para o início
        </Link>

        {/* FORMULÁRIO */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-space-lg rounded-card border border-slate-800 bg-surface p-space-lg shadow-[0_0_60px_rgba(37,99,235,0.12)] sm:p-space-xl"
        >

          {/* CABEÇALHO */}
          <div className="text-center">
            <p className="mb-space-sm text-xs font-semibold tracking-[3px] text-blue-400">
              BEM-VINDO AO
            </p>

            <h1 className="mb-space-sm text-4xl font-bold tracking-[4px]">
              JOVI <span className="text-blue-400">V70</span>
            </h1>

            <p className="text-sm text-slate-400">
              Entre com suas credenciais para explorar
              sua experiência digital.
            </p>
          </div>

          {/* USUÁRIO */}
          <div className="flex flex-col gap-space-sm">
            <label
              htmlFor="usuario"
              className="text-sm font-medium text-slate-200"
            >
              Usuário
            </label>

            <input
              id="usuario"
              type="text"
              placeholder="Digite seu usuário"
              autoComplete="username"
              value={usuario}
              onChange={(event) => {
                setUsuario(event.target.value);
                setErro("");
              }}
              className="w-full rounded-button border border-slate-700 bg-background px-space-md py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-primary focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* SENHA */}
          <div className="flex flex-col gap-space-sm">
            <label
              htmlFor="senha"
              className="text-sm font-medium text-slate-200"
            >
              Senha
            </label>

            <input
              id="senha"
              type="password"
              inputMode="numeric"
              placeholder="Digite sua senha"
              autoComplete="current-password"
              value={senha}
              onChange={(event) => {
                setSenha(event.target.value);
                setErro("");
              }}
              className="w-full rounded-button border border-slate-700 bg-background px-space-md py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-primary focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* MENSAGEM DE ERRO */}
          {erro && (
            <p
              role="alert"
              className="rounded-button border border-red-500/30 bg-red-500/10 px-space-md py-3 text-center text-sm text-red-400"
            >
              {erro}
            </p>
          )}

          {/* BOTÃO DE LOGIN */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-button bg-primary px-space-lg py-space-md font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Entrar no JOVI V70
          </button>

        </form>

        {/* RODAPÉ */}
        <p className="mt-space-xl text-center text-xs text-slate-500">
          JOVI V70 — Projeto acadêmico | Sprint 4
        </p>

      </div>
    </main>
  );
}