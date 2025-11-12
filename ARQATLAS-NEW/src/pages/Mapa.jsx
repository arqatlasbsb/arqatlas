import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Navbar from "../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import obrasData from "../Data/obras.json";

// ==========================================================
// 🔹 ÍCONES PERSONALIZADOS POR TIPO (usando assets locais)
// ==========================================================
const getIconByTipo = (tipo) => {
  // Definição de cor conforme tipo
  const color =
    tipo === "Religiosa"
      ? "#3B82F6" // azul
      : tipo === "Institucional"
      ? "#EC4899" // rosa CEUB
      : "#10B981"; // verde padrão

  // Criação do marcador estilizado via SVG inline
  return L.divIcon({
    html: `
      <div style="
        position: relative;
        width: 32px;
        height: 45px;
      ">
        <img
          src="${require('../assets/icons/marker-icon.png')}"
          style="width: 32px; height: 45px; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.3));"
        />
        <div style="
          position: absolute;
          top: 7px;
          left: 8px;
          width: 16px;
          height: 16px;
          background-color: ${color};
          border-radius: 50%;
          border: 2px solid white;
        "></div>
      </div>
    `,
    className: "",
    iconSize: [32, 45],
    iconAnchor: [16, 45],
  });
};

// ==========================================================
// 🔹 COMPONENTE PRINCIPAL DO MAPA
// ==========================================================
export default function Mapa() {
  const navigate = useNavigate();

  // Estado dos filtros
  const [showFilters, setShowFilters] = useState(false);
  const [tipo, setTipo] = useState("Todos");
  const [decada, setDecada] = useState("Todas");
  const [arquiteto, setArquiteto] = useState("");

  // Estado da obra selecionada
  const [obraSelecionada, setObraSelecionada] = useState(null);

  // ==========================================================
  // 🔹 FILTRAGEM DAS OBRAS
  // ==========================================================
  const obrasFiltradas = obrasData.filter((obra) => {
    const filtroTipo =
      tipo === "Todos" || obra.tipo.toLowerCase() === tipo.toLowerCase();
    const filtroDecada =
      decada === "Todas" || obra.decada.toLowerCase() === decada.toLowerCase();
    const filtroArquiteto =
      arquiteto === "" ||
      obra.autor.toLowerCase().includes(arquiteto.toLowerCase());
    return filtroTipo && filtroDecada && filtroArquiteto;
  });

  // ==========================================================
  // 🔹 SIDEBAR AO CLICAR NO MARCADOR
  // ==========================================================
  const SidebarObra = ({ obra, onClose, onVerDetalhes }) => (
    <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-2xl p-5 z-[999] rounded-r-2xl">
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-black float-right"
      >
        ✖
      </button>
      <h2 className="text-xl font-bold text-[#0A192F] mt-2">{obra.nome}</h2>
      <p className="italic text-gray-600 mb-3">{obra.autor}</p>
      <img
        src={obra.imagem}
        alt={obra.nome}
        className="rounded-lg w-full h-40 object-cover mb-4"
      />
      <p className="text-gray-700 text-sm mb-6">
        {obra.descricao.slice(0, 180)}...
      </p>
      <button
        onClick={onVerDetalhes}
        className="bg-[#0A192F] text-white w-full py-2 rounded-md hover:bg-[#132c57] transition"
      >
        Ver detalhadamente
      </button>
    </div>
  );

  // ==========================================================
  // 🔹 INTERFACE PRINCIPAL
  // ==========================================================
  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col">
      <Navbar />

      <main className="relative w-full h-[100vh]">
        {/* Botão de filtro */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="absolute top-5 right-5 z-[1000] bg-white text-[#0A192F] border border-gray-200 shadow-md px-5 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
        >
          {showFilters ? "Fechar filtros" : "Abrir filtros"}
        </button>

        {/* Dropdown de filtros */}
        {showFilters && (
          <div className="absolute top-20 right-6 z-[1000] bg-white rounded-2xl shadow-lg p-6 w-72 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0A192F] mb-6">🔍 Filtros</h2>

            {/* Tipo */}
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Tipo de Obra
            </label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full mb-4 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#0A192F]"
            >
              <option>Todos</option>
              <option>Religiosa</option>
              <option>Institucional</option>
            </select>

            {/* Década */}
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Década
            </label>
            <select
              value={decada}
              onChange={(e) => setDecada(e.target.value)}
              className="w-full mb-4 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#0A192F]"
            >
              <option>Todas</option>
              <option>1950</option>
              <option>1960</option>
              <option>1970</option>
            </select>

            {/* Arquiteto */}
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Arquiteto
            </label>
            <input
              type="text"
              value={arquiteto}
              onChange={(e) => setArquiteto(e.target.value)}
              placeholder="Buscar arquiteto..."
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#0A192F]"
            />
          </div>
        )}

        {/* Mapa */}
        <MapContainer
          center={[-15.801, -47.88]} // Brasília
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full z-[1]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Marcadores */}
          {obrasFiltradas.map((obra) => (
            <Marker
              key={obra.id}
              position={obra.coordenadas}
              icon={getIconByTipo(obra.tipo)}
              eventHandlers={{
                click: () => setObraSelecionada(obra),
              }}
            >
              <Tooltip
                direction="top"
                offset={[0, -40]}
                opacity={1}
                className="!bg-transparent !border-none !shadow-none"
              >
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 px-3 py-2 min-w-[160px] max-w-[200px] transition-all duration-200 hover:scale-[1.03]">
                  <p className="font-bold text-[#0A192F] text-sm mb-1 leading-tight">
                    {obra.nome}
                  </p>
                  <p className="text-gray-600 text-xs italic mb-2">
                    {obra.autor} • {obra.decada}
                  </p>
                  <div className="relative w-full h-[60px] mb-2 overflow-hidden rounded-md">
                    <img
                      src={obra.imagem}
                      alt={obra.nome}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <button
                    onClick={() => navigate(`/obra/${obra.id}`)}
                    className="text-xs bg-[#0A192F] text-white px-2 py-1 rounded-md hover:bg-[#132c57] transition w-full"
                  >
                    Ver detalhes
                  </button>
                </div>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>

        {/* Sidebar de detalhes */}
        {obraSelecionada && (
          <SidebarObra
            obra={obraSelecionada}
            onClose={() => setObraSelecionada(null)}
            onVerDetalhes={() => navigate(`/obra/${obraSelecionada.id}`)}
          />
        )}
      </main>
    </div>
  );
}
