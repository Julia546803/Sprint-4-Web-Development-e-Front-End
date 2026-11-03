"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

import { useAuth } from "../../../contexts/AuthContext";
import { useContacts } from "../../../contexts/ContactsContext";
import ContactDetails from "../../../components/contacts/ContactDetails";

export default function ContatoDetalhesPage() {
  const router = useRouter();
  const { id } = useParams();

  // AUTENTICAÇÃO
  const { usuarioLogado, carregando } = useAuth();

  // CONTATOS DA API
  const {
    contacts,
    loading,
    error,
    fetchContacts,
  } = useContacts();

  // PROTEGER A ROTA
  useEffect(() => {
    if (!carregando && !usuarioLogado) {
      router.replace("/login");
    }
  }, [carregando, usuarioLogado, router]);

  // LOCALIZAR CONTATO PELO ID
  const contato = contacts.find(
    (contact) => String(contact.id) === String(id)
  );

  // VOLTAR PARA A LISTA
  function voltar() {
    router.push("/celular/contatos");
  }

  // AGUARDAR AUTENTICAÇÃO
  if (carregando || !usuarioLogado) {
    return null;
  }

  return (
    <main className="h-[820px] w-96 max-w-full overflow-y-auto rounded-phone border-8 border-phone-border bg-background p-space-md text-white shadow-xl">
      {/* BOTÃO VOLTAR */}
      <button
        type="button"
        onClick={voltar}
        className="mb-space-lg cursor-pointer rounded-button bg-primary px-space-md py-2 text-white"
      >
        Voltar
      </button>

      {/* TÍTULO */}
      <h1 className="mb-space-lg text-2xl font-bold">
        Detalhes do contato
      </h1>

      {/* CARREGAMENTO */}
      {loading && (
        <p className="text-center text-gray-300">
          Carregando contato...
        </p>
      )}

      {/* ERRO */}
      {error && (
        <div className="text-center">
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

      {/* CONTATO NÃO ENCONTRADO */}
      {!loading && !error && !contato && (
        <p className="text-center text-gray-400">
          Contato não encontrado.
        </p>
      )}

      {/* DETALHES DO CONTATO */}
      {!loading && !error && contato && (
        <ContactDetails contato={contato} />
      )}
    </main>
  );
}