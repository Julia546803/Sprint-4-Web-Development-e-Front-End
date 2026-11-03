import ContactCard from "./ContactCard";

export default function ContactList({ contacts }) {
  // VERIFICAR SE EXISTEM CONTATOS
  if (contacts.length === 0) {
    return (
      <p className="mt-space-lg text-center text-gray-400">
        Nenhum contato encontrado.
      </p>
    );
  }

  return (
    <section className="flex flex-col gap-space-md">
      {/* LISTA DE CONTATOS */}
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))}
    </section>
  );
}