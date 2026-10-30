export default function CameraControls({
  onFoto,
  onScan,
  onFilter,
  onGallery,
  modo,
  onRemoveFilter,
}) {
  return (
    <section className="controls">

      <button onClick={onFoto}>
        Foto
      </button>

      <button onClick={onScan}>
        Digitalizar
      </button>

      {modo === "filter" ? (
        <button onClick={onRemoveFilter}>
          Remover filtro
        </button>
      ) : (
        <button onClick={onFilter}>
          Filtro
        </button>
      )}

      <button onClick={onGallery}>
        Galeria
      </button>

    </section>
  );
}