export default function GalleryPanel({fotos, onClose, onDelete,}) {
  return (
    <section className="absolute top-16 right-4 bottom-36 left-4 z-40 overflow-y-auto rounded-card bg-black p-space-md">
      {/* BOTÃO FECHAR */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar galeria"
        className="absolute top-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-surface text-white"
      >
        ✕
      </button>

      {/* TÍTULO */}
      <h3 className="mb-space-lg text-center text-xl font-bold text-white">
        Galeria
      </h3>

      {/* GALERIA VAZIA */}
      {fotos.length === 0 ? (
        <p className="text-center text-gray-300">
          Nenhuma foto capturada.
        </p>
      ) : (
        /* GRID DE FOTOS */
        <section className="grid grid-cols-2 gap-3">
          {fotos.map((foto, index) => (
            <div
              key={foto.id ?? index}
              className="relative"
            >
              {/* IMAGEM */}
              <img
                className={
                  foto.comFiltro
                    ? "h-32 w-full rounded-button object-cover sepia"
                    : "h-32 w-full rounded-button object-cover"
                }
                src={foto.imagem}
                alt={`Foto ${index + 1}`}
              />

              {/* BOTÃO EXCLUIR */}
              <button
                type="button"
                onClick={() => onDelete(index)}
                aria-label={`Excluir foto ${index + 1}`}
                className="absolute right-2 bottom-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black text-white"
              >
                🗑️
              </button>
            </div>
          ))}
        </section>
      )}
    </section>
  );
}