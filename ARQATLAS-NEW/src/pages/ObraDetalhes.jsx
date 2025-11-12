import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";
import obras from "../Data/obras.json";

export default function ObraDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const obra = obras.find((obra) => obra.id === parseInt(id));

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
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full">
          <img
            src={obra.imagem}
            alt={obra.nome}
            className="rounded-lg w-full h-80 object-cover mb-6"
          />

          <h1 className="text-3xl font-bold text-[#0A192F] mb-2">{obra.nome}</h1>
          <p className="text-gray-600 mb-4 italic">
            {obra.arquiteto} — {obra.decada}
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            {obra.descricao}
          </p>

          <button
            onClick={() => navigate("/mapa")}
            className="mt-4 bg-[#0A192F] text-white py-2 px-6 rounded-md hover:bg-[#132c57] transition"
          >
            Voltar ao mapa
          </button>
        </div>

        {/* Sugestões de obras */}
        <section className="mt-16 w-full max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0A192F] mb-6">
            Sugestões de obras
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {obras
              .filter((o) => o.id !== obra.id)
              .slice(0, 3)
              .map((sugestao) => (
                <div
                  key={sugestao.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer"
                  onClick={() => navigate(`/obra/${sugestao.id}`)}
                >
                  <img
                    src={sugestao.imagem}
                    alt={sugestao.nome}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{sugestao.nome}</h3>
                    <p className="text-sm text-gray-600">
                      {sugestao.arquiteto}
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
