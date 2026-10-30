"use client";

import { useEffect, useState } from "react";

import CameraControls from "./CameraControls";
import GalleryPanel from "./GalleryPanel";
import CameraPreview from "./CameraPreview";

export default function CameraScreen({ onCloseCamera }) {
  const [modo, setModo] = useState("normal");

  const [galeria, setGaleria] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const fotosSalvas = localStorage.getItem("galeria");

    if (!fotosSalvas) {
      return [];
    }

    return JSON.parse(fotosSalvas);
  });

  const [fotoCapturada, setFotoCapturada] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const fotosSalvas = localStorage.getItem("galeria");

    if (!fotosSalvas) {
      return null;
    }

    const fotosConvertidas = JSON.parse(fotosSalvas);

    if (fotosConvertidas.length === 0) {
      return null;
    }

    return fotosConvertidas[
      fotosConvertidas.length - 1
    ].imagem;
  });

  const [fotoTemFiltro, setFotoTemFiltro] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const fotosSalvas = localStorage.getItem("galeria");

    if (!fotosSalvas) {
      return false;
    }

    const fotosConvertidas = JSON.parse(fotosSalvas);

    if (fotosConvertidas.length === 0) {
      return false;
    }

    return fotosConvertidas[
      fotosConvertidas.length - 1
    ].comFiltro;
  });

  const [mostrarGaleria, setMostrarGaleria] = useState(false);

  // SALVAR GALERIA NO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem(
      "galeria",
      JSON.stringify(galeria)
    );
  }, [galeria]);

  // BOTÃO FOTO
  function handleFoto() {
    setModo("normal");
    setMostrarGaleria(false);
  }

  // BOTÃO DIGITALIZAR
  function handleScan() {
    setModo("scan");
    setMostrarGaleria(false);
  }

  // BOTÃO FILTRO
  function handleFilter() {
    setModo("filter");
    setMostrarGaleria(false);
  }

  // REMOVER FILTRO
  function handleRemoveFilter() {
    setModo("normal");
  }

  // CAPTURAR FOTO
  function handleCaptura() {
    let imagemAtual;

    if (modo === "scan") {
      imagemAtual =
        "https://st.depositphotos.com/1777193/3260/i/950/depositphotos_32603753-stock-photo-documents-on-the-table.jpg";
    } else {
      imagemAtual =
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop";
    }

    const comFiltro = modo === "filter";

    // MATH
    const idFoto = Math.floor(
      Math.random() * 100000
    );

    const novaFoto = {
      id: idFoto,
      imagem: imagemAtual,
      comFiltro: comFiltro,
    };

    setFotoCapturada(imagemAtual);
    setFotoTemFiltro(comFiltro);

    setGaleria((fotos) => [
      ...fotos,
      novaFoto,
    ]);
  }

  // ABRIR / FECHAR GALERIA
  function handleGaleria() {
    setMostrarGaleria(!mostrarGaleria);
  }

  // APAGAR FOTO
  function handleDeleteFoto(indexFoto) {
    setGaleria((fotos) => {
      const novaGaleria = fotos.filter(
        (_, index) => index !== indexFoto
      );

      if (novaGaleria.length > 0) {
        const ultimaFoto =
          novaGaleria[novaGaleria.length - 1];

        setFotoCapturada(ultimaFoto.imagem);
        setFotoTemFiltro(ultimaFoto.comFiltro);
      } else {
        setFotoCapturada(null);
        setFotoTemFiltro(false);
      }

      return novaGaleria;
    });
  }

  return (
    <section className="camera-screen">

      {/* TOPO */}

      <section className="camera-top">

        <button onClick={onCloseCamera}>
          ←
        </button>

        <h2>Câmera</h2>

        <button>
          ⚙
        </button>

      </section>

      {/* VISUALIZAÇÃO */}

      <CameraPreview modo={modo} />

      {/* GALERIA */}

      {mostrarGaleria && (
        <GalleryPanel
          fotos={galeria}
          onClose={handleGaleria}
          onDelete={handleDeleteFoto}
        />
      )}

      {/* CONTROLES */}

      <CameraControls
        onFoto={handleFoto}
        onScan={handleScan}
        onFilter={handleFilter}
        onGallery={handleGaleria}
        modo={modo}
        onRemoveFilter={handleRemoveFilter}
      />

      {/* BOTÃO PRINCIPAL */}

      <div
        className="camera-button"
        onClick={handleCaptura}
      ></div>

      {/* MINI GALERIA */}

      <section
        className="gallery"
        onClick={
          fotoCapturada
            ? handleGaleria
            : undefined
        }
      >

        {fotoCapturada ? (
          <img
            className={
              fotoTemFiltro
                ? "gallery-image filtered"
                : "gallery-image"
            }
            src={fotoCapturada}
            alt="Última foto registrada"
          />
        ) : (
          <div className="empty-gallery">
            <span>📷</span>
            <p>Sem fotos</p>
          </div>
        )}

      </section>

    </section>
  );
}