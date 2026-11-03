export default function CameraPreview({ modo }) {
  const imagem =
    modo === "scan"
      ? "https://st.depositphotos.com/1777193/3260/i/950/depositphotos_32603753-stock-photo-documents-on-the-table.jpg"
      : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className="relative h-full w-full">
      {/* IMAGEM DA CÂMERA */}
      <img
        className={
          modo === "filter"
            ? "h-full w-full object-cover sepia"
            : "h-full w-full object-cover"
        }
        src={imagem}
        alt={
          modo === "scan"
            ? "Documento sendo digitalizado"
            : "Visualização da câmera"
        }
      />

      {/* MOLDURA DE DIGITALIZAÇÃO */}
      {modo === "scan" && (
        <div className="absolute top-1/2 left-1/2 h-80 w-64 -translate-x-1/2 -translate-y-1/2 rounded-card border-4 border-green-400 shadow-lg"></div>
      )}
    </section>
  );
}