"use client";

import { useEffect, useState } from "react";

import CameraControls from "./CameraControls";
import GalleryPanel from "./GalleryPanel";
import CameraPreview from "./CameraPreview";

export default function CameraScreen({ onCloseCamera }) {
  const [modo, setModo] = useState("normal");
  const [galeria, setGaleria] = useState([]);
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [carregandoGaleria, setCarregandoGaleria] = useState(true);

  // CARREGAR GALERIA DO LOCALSTORAGE
  useEffect(() => {
    const carregarGaleria = () => {
      const fotosSalvas = localStorage.getItem("galeria");

      if (fotosSalvas) {
        try {
          const fotosConvertidas = JSON.parse(fotosSalvas);

          if (Array.isArray(fotosConvertidas)) {
            setGaleria(fotosConvertidas);
          }
        } catch {
          setGaleria([]);
        }
      }

      setCarregandoGaleria(false);
    };

    const timer = setTimeout(carregarGaleria, 0);

    return () => clearTimeout(timer);
  }, []);

  // SALVAR GALERIA NO LOCALSTORAGE
  useEffect(() => {
    if (!carregandoGaleria) {
      localStorage.setItem(
        "galeria",
        JSON.stringify(galeria)
      );
    }
  }, [galeria, carregandoGaleria]);

  // ÚLTIMA FOTO DA GALERIA
  const ultimaFoto = galeria[galeria.length - 1];

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

  // CAPTURAR FOTO SIMULADA
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

    // GERAR ID DA FOTO
    const idFoto = Math.floor(
      Math.random() * 100000
    );

    const novaFoto = {
      id: idFoto,
      imagem: imagemAtual,
      comFiltro: comFiltro,
    };

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
    setGaleria((fotos) =>
      fotos.filter(
        (_, index) => index !== indexFoto
      )
    );
  }

  return (
    <section className="relative flex h-[calc(100%-40px)] w-full flex-col bg-black">
      {/* TOPO DA CÂMERA */}
      <section className="absolute top-0 z-20 flex w-full items-center justify-between p-4">
        <button
          type="button"
          onClick={onCloseCamera}
          aria-label="Voltar"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-white"
        >
          ←
        </button>

        <h2 className="font-bold text-white">
          Câmera
        </h2>

        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-white">
          ⚙
        </span>
      </section>

      {/* VISUALIZAÇÃO */}
      <CameraPreview modo={modo} />

      {/* PAINEL DA GALERIA */}
      {mostrarGaleria && (
        <GalleryPanel
          fotos={galeria}
          onClose={handleGaleria}
          onDelete={handleDeleteFoto}
        />
      )}

      {/* CONTROLES INFERIORES DA CÂMERA */}
      <div className="absolute bottom-12 left-0 z-30 flex w-full flex-col items-center gap-space-lg px-2">
        {/* BOTÕES DE MODO */}
        <CameraControls
          onFoto={handleFoto}
          onScan={handleScan}
          onFilter={handleFilter}
          onGallery={handleGaleria}
          modo={modo}
          onRemoveFilter={handleRemoveFilter}
        />

        {/* BOTÃO PRINCIPAL DE CAPTURA */}
        <button
          type="button"
          onClick={handleCaptura}
          aria-label="Capturar foto"
          className="h-16 w-16 shrink-0 cursor-pointer rounded-full border-4 border-white bg-white"
        />
      </div>

      {/* MINI GALERIA */}
      <button
        type="button"
        onClick={ultimaFoto ? handleGaleria : undefined}
        disabled={!ultimaFoto}
        aria-label="Abrir galeria de fotos"
        className="absolute right-5 bottom-14 z-50 h-16 w-16 overflow-hidden rounded-button border-2 border-white"
      >
        {ultimaFoto ? (
          <img
            className={
              ultimaFoto.comFiltro
                ? "h-full w-full object-cover sepia"
                : "h-full w-full object-cover"
            }
            src={ultimaFoto.imagem}
            alt="Última foto registrada"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-surface text-white">
            <span className="text-2xl">📷</span>
            <p className="text-xs">Sem fotos</p>
          </div>
        )}
      </button>
    </section>
  );
}