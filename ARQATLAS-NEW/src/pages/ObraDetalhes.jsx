import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";
import obrasData from "../Data/obras.json";

export default function ObraDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Busca a obra correspondente ao ID
  const obra = obrasData.find((obra) => obra.id === Number(id));

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
            {obra.autor} — {obra.decada}
          </p>

          <p className="text-gray-700 leading-relaxed">{obra.descricao}</p>

          <button
            onClick={() => navigate("/mapa")}
            className="mt-8 bg-[#0A192F] text-white py-2 px-6 rounded-md hover:bg-[#132c57] transition"
          >
            Voltar ao mapa
          </button>
        </div>
      </main>
    </div>
  );
}
