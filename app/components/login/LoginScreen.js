"use client";

import { useState } from "react";

export default function LoginScreen({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  // USUÁRIOS AUTORIZADOS
  const usuarios = [
    {
      usuario: "Pedro",
      senha: "572549",
    },
    {
      usuario: "Julia",
      senha: "569203",
    },
    {
      usuario: "Matheus",
      senha: "571719",
    },
    {
      usuario: "Guilherme",
      senha: "570835",
    },
    {
      usuario: "Tester",
      senha: "123456",
    },
  ];

  function handleSubmit(event) {
    event.preventDefault();

    // VERIFICAR CAMPOS VAZIOS
    if (usuario === "" || senha === "") {
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
    onLogin();
  }

  return (
    <main className="login-container">

      <form
        className="login-box"
        onSubmit={handleSubmit}
      >

        <h1>JOVI V70</h1>

        <p>Faça login para entrar</p>

        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(event) =>
            setUsuario(event.target.value)
          }
        />

        <input
          type="password"
          inputMode="numeric"
          placeholder="Senha"
          value={senha}
          onChange={(event) =>
            setSenha(event.target.value)
          }
        />

        {erro && (
          <p className="login-error">
            {erro}
          </p>
        )}

        <button type="submit">
          Entrar
        </button>

      </form>

    </main>
  );
}