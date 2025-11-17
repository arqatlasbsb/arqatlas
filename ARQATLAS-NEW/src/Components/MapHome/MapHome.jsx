import React, { useEffect, useState } from "react";
import Mapa from "../MapView/MapView";
import Background from "../../images/Background/BackgroundMapSection.svg";
import obras from "../../Data/obras.json";
import CarouselHome from "..//CarouselHome/CarouselHome";
import GalleryGrid from "../GalleryGrid/GalleryGrid";

const MapHome = () => {
  const [obraSelecionada, setObraSelecionada] = useState(null);
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [imagemSelecionada, setImagemSelecionada] = useState(0);

  // Seleciona automaticamente a cada 1 hora
  useEffect(() => {
    const pickRandomObra = () => {
      const random = obras[Math.floor(Math.random() * obras.length)];
      setObraSelecionada(random);
      setMostrarGaleria(false);
      setImagemSelecionada(0);
    };

    pickRandomObra(); // primeira vez

    const interval = setInterval(pickRandomObra, 3600 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (!obraSelecionada) return null;

  return (
    <div
      className="w-full bg-cover bg-center p-8"
      style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex items-start justify-between gap-8">
        {/* MAPA */}
        <div className="w-1/2">
          <Mapa
            modo="home"
            onSelectObra={(obraComImagens) => {
              setObraSelecionada(obraComImagens);
              setImagemSelecionada(0);
              setMostrarGaleria(false);
            }}
          />
        </div>

        {/* INFOS E CAROUSEL */}
        <div className="w-1/2 flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-black">
            {obraSelecionada.nome}
          </h2>

          <p className="descricaoHome text-lg text-gray-700">
            {obraSelecionada.descricao}
          </p>

          <CarouselHome
            imagens={obraSelecionada.imagens}
            onClickImagem={(index) => {
              setImagemSelecionada(index);
              setMostrarGaleria(true);
            }}
          />
        </div>
      </div>

      {/* GALERIA APÓS O CAROUSEL */}
      {mostrarGaleria && (
        <div className="mt-10">
          <GalleryGrid
            images={obraSelecionada.imagens}
            imagemIndex={imagemSelecionada}
            onSelect={(i) => setImagemSelecionada(i)}
          />
        </div>
      )}
    </div>
  );
};

export default MapHome;
