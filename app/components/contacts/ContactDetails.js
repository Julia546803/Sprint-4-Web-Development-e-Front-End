export default function ContactDetails({ contato }) {
  return (
    <section className="flex flex-col gap-space-md">
      {/* INFORMAÇÕES DO CONTATO */}
      <div className="rounded-card border border-gray-700 bg-surface p-space-md">
        <h2 className="mb-space-md text-xl font-bold text-white">
          {contato.name}
        </h2>

        <div className="flex flex-col gap-space-sm text-sm text-gray-300">
          <p>
            <strong className="text-white">Usuário:</strong>{" "}
            {contato.username}
          </p>

          <p className="break-words">
            <strong className="text-white">E-mail:</strong>{" "}
            {contato.email}
          </p>

          <p>
            <strong className="text-white">Telefone:</strong>{" "}
            {contato.phone}
          </p>

          <p className="break-words">
            <strong className="text-white">Site:</strong>{" "}
            {contato.website}
          </p>
        </div>
      </div>

      {/* ENDEREÇO */}
      <div className="rounded-card border border-gray-700 bg-surface p-space-md">
        <h3 className="mb-space-md text-lg font-bold text-white">
          Endereço
        </h3>

        <div className="flex flex-col gap-space-sm text-sm text-gray-300">
          <p>
            {contato.address?.street}, {contato.address?.suite}
          </p>

          <p>
            {contato.address?.city} - {contato.address?.zipcode}
          </p>
        </div>
      </div>

      {/* EMPRESA */}
      <div className="rounded-card border border-gray-700 bg-surface p-space-md">
        <h3 className="mb-space-md text-lg font-bold text-white">
          Empresa
        </h3>

        <p className="text-sm text-gray-300">
          {contato.company?.name}
        </p>
      </div>
    </section>
  );
}