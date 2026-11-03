export default function AppIcon({ icon, name, onClick, camera }) {
  return (
    <article
      className="flex flex-col items-center gap-space-sm text-center"
      onClick={onClick}>

      {/* ÍCONE DO APLICATIVO */}
      <div
        className={
          camera
            ? "flex h-16 w-16 items-center justify-center rounded-card bg-primary text-3xl"
            : name === "Contatos"
            ? "flex h-16 w-16 items-center justify-center rounded-card bg-secondary text-3xl"
            : "flex h-16 w-16 items-center justify-center rounded-card bg-surface text-3xl"
        }>
        {icon}
      </div>

      {/* NOME DO APLICATIVO */}
      <p className="text-xs text-white">
        {name}
      </p>
    </article>
  );
}