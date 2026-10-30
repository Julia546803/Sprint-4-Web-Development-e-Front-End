export default function CameraPreview({ modo }) {
  const imagem =
    modo === "scan"
      ? "https://st.depositphotos.com/1777193/3260/i/950/depositphotos_32603753-stock-photo-documents-on-the-table.jpg"
      : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className="camera-preview">

      <img
        className={
          modo === "filter"
            ? "camera-image filtered"
            : "camera-image"
        }
        src={imagem}
        alt={
          modo === "scan"
            ? "Documento sendo digitalizado"
            : "Visualização da câmera"
        }
      />

      {modo === "scan" && (
        <div className="scanner-frame"></div>
      )}

    </section>
  );
}