import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";
import obras from "../Data/obras.json";
import GalleryData from "../Data/GalleryData";

export default function ObraDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const obra = obras.find((obra) => obra.id === parseInt(id));

  // Função para pegar imagem interna ou externa
  const getImage = (obra) => {
    if (typeof obra.imagem === "number") {
      const img = GalleryData.find((g) => g.id === obra.imagem);
      return img?.src || "";
    }
    return obra.imagem;
  };

  if (!obra) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-2xl font-semibold text-gray-600">
          Obra não encontrada 🏗️
        </p>
        <button
          onClick={() => navigate("/mapa")}
          className="mt-4 bg-[#0A192F] text-white py-2 px-6 rounded-md hover:bg-[#132c57] transition"
        >
          Voltar ao mapa
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center p-8">
        <div className="bg-white rounded-xl shadow-xl p-6 max-w-3xl w-full border border-gray-200">
          {/* IMAGEM PRINCIPAL */}
          <img
            src={getImage(obra)}
            alt={obra.nome}
            className="rounded-lg w-full h-80 object-cover mb-6 shadow-md"
          />

          {/* TÍTULO */}
          <h1 className="text-3xl font-bold text-[#0A192F] mb-2">
            {obra.nome}
          </h1>

          {/* AUTOR E DÉCADA */}
          <p className="text-gray-600 mb-4 italic">
            {obra.autor} — {obra.decada}
          </p>

          {/* DESCRIÇÃO */}
          <p className="text-gray-700 leading-relaxed mb-10 text-justify">
            {obra.descricao}
          </p>

          {/* BOTÃO VOLTAR */}
          <button
            onClick={() => navigate("/mapa")}
            className="mt-4 bg-[#0A192F] text-white py-2 px-6 rounded-md hover:bg-[#132c57] transition"
          >
            Voltar ao mapa
          </button>
        </div>

        {/* SUGESTÕES DE OBRAS */}
        <section className="mt-16 w-full max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0A192F] mb-6">
            Sugestões de obras
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {obras
              .filter((o) => o.id !== obra.id) // exclui a obra atual
              .slice(0, 3)                     // mostra 3 sugestões
              .map((sugestao) => (
                <div
                  key={sugestao.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer border border-gray-200"
                  onClick={() => navigate(`/obra/${sugestao.id}`)}
                >
                  <img
                    src={
                      typeof sugestao.imagem === "number"
                        ? GalleryData.find((g) => g.id === sugestao.imagem)?.src
                        : sugestao.imagem
                    }
                    alt={sugestao.nome}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#0A192F]">
                      {sugestao.nome}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {sugestao.autor}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
