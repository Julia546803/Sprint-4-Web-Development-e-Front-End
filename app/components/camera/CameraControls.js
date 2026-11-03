export default function CameraControls({onFoto, onScan, onFilter, onGallery, modo,  onRemoveFilter,}) {
  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-2">
      {/* BOTÃO FOTO */}
      <button
        type="button"
        onClick={onFoto}
        className="cursor-pointer rounded-button bg-primary px-3 py-3 text-white"
      >
        Foto
      </button>

      {/* BOTÃO DIGITALIZAR */}
      <button
        type="button"
        onClick={onScan}
        className="cursor-pointer rounded-button bg-green-600 px-3 py-3 text-white"
      >
        Digitalizar
      </button>

      {/* BOTÃO FILTRO */}
      {modo === "filter" ? (
        <button
          type="button"
          onClick={onRemoveFilter}
          className="cursor-pointer rounded-button bg-purple-600 px-3 py-3 text-white"
        >
          Remover filtro
        </button>
      ) : (
        <button
          type="button"
          onClick={onFilter}
          className="cursor-pointer rounded-button bg-purple-600 px-3 py-3 text-white"
        >
          Filtro
        </button>
      )}

      {/* BOTÃO GALERIA */}
      <button
        type="button"
        onClick={onGallery}
        className="cursor-pointer rounded-button bg-orange-500 px-3 py-3 text-white"
      >
        Galeria
      </button>
    </section>
  );
}