export default function GalleryPanel({
  fotos,
  onClose,
  onDelete,
}) {
  return (
    <section className="gallery-panel">

      <button
        className="close-gallery"
        onClick={onClose}
      >
        ✕
      </button>

      <h3>Galeria</h3>

      {fotos.length === 0 ? (
        <p>Nenhuma foto capturada.</p>
      ) : (
        <section className="gallery-grid">

          {fotos.map((foto, index) => (
            <div
              className="gallery-item"
              key={foto.id ?? index}
            >

              <img
                className={
                  foto.comFiltro
                    ? "gallery-image filtered"
                    : "gallery-image"
                }
                src={foto.imagem}
                alt={`Foto ${index + 1}`}
              />

              <button
                className="delete-photo"
                onClick={() => onDelete(index)}
                aria-label={`Excluir foto ${index + 1}`}
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