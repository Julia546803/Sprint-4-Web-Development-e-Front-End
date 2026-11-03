"use client";

import { useRouter } from "next/navigation";

export default function ContactCard({ contact }) {
  const router = useRouter();

  // ABRIR DETALHES DO CONTATO
  function abrirDetalhes() {
    router.push(`/celular/contatos/${contact.id}`);
  }

  return (
    <article className="rounded-card border border-gray-700 bg-surface p-space-md">
      {/* BOTÃO DO CONTATO */}
      <button
        type="button"
        onClick={abrirDetalhes}
        className="w-full cursor-pointer text-left text-white"
      >
        {/* NOME */}
        <h3 className="mb-space-sm text-base font-bold">
          {contact.name}
        </h3>

        {/* EMAIL */}
        <p className="break-words text-sm text-gray-300">
          {contact.email}
        </p>

        {/* TELEFONE */}
        <p className="mt-2 text-sm text-gray-400">
          {contact.phone}
        </p>
      </button>
    </article>
  );
}