export default function ContactSearch({ busca, setBusca }) {
  return (
    <input
      type="text"
      aria-label="Buscar contato pelo nome"
      placeholder="Buscar contato pelo nome..."
      value={busca}
      onChange={(event) => setBusca(event.target.value)}
      className="mt-space-md mb-space-lg w-full rounded-button border border-gray-600 bg-surface p-space-md text-white placeholder:text-gray-400"
    />
  );
}