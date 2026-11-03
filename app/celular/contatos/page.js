"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../contexts/AuthContext";
import { useContacts } from "../../contexts/ContactsContext";

import ContactList from "../../components/contacts/ContactList";
import ContactSearch from "../../components/contacts/ContactSearch";

export default function ContatosPage() {
  const router = useRouter();

  // AUTENTICAÇÃO
  const { usuarioLogado, carregando } = useAuth();

  // CONTATOS DA API
  const {
    contacts,
    loading,
    error,
    fetchContacts,
  } = useContacts();

  // ESTADO DA BUSCA
  const [busca, setBusca] = useState("");

  // PROTEGER A ROTA
  useEffect(() => {
    if (!carregando && !usuarioLogado) {
      router.replace("/login");
    }
  }, [carregando, usuarioLogado, router]);

  // FILTRAR CONTATOS PELO NOME
  const contatosFiltrados = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(busca.toLowerCase().trim())
  );

  // VOLTAR PARA A TELA INICIAL
  function voltar() {
    router.push("/celular");
  }

  // AGUARDAR AUTENTICAÇÃO
  if (carregando || !usuarioLogado) {
    return null;
  }

  return (
    <main className="h-[820px] w-96 max-w-full overflow-y-auto rounded-phone border-8 border-phone-border bg-background p-space-md text-white shadow-xl">
      {/* TÍTULO */}
      <h1 className="mb-space-md text-2xl font-bold">
        Contatos
      </h1>

      {/* BOTÃO VOLTAR */}
      <button
        type="button"
        onClick={voltar}
        className="mb-space-lg cursor-pointer rounded-button bg-primary px-space-md py-2 text-white"
      >
        Voltar
      </button>

      {/* CAMPO DE BUSCA */}
      <ContactSearch
        busca={busca}
        setBusca={setBusca}
      />

      {/* CARREGAMENTO */}
      {loading && (
        <p className="mt-space-md text-center text-gray-300">
          Carregando contatos...
        </p>
      )}

      {/* ERRO */}
      {error && (
        <div className="mt-space-md text-center">
          <p className="mb-space-md text-red-400">
            {error}
          </p>

          <button
            type="button"
            onClick={fetchContacts}
            className="cursor-pointer rounded-button bg-primary px-space-md py-2 text-white"
          >
            Tentar novamente
          </button>
        </div>
      )}

      {/* LISTA FILTRADA */}
      {!loading && !error && (
        <ContactList contacts={contatosFiltrados} />
      )}
    </main>
  );
}