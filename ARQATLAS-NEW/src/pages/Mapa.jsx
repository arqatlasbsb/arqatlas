import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Navbar from "../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import obrasData from "../Data/obras.json";
import GalleryData from "../Data/GalleryData";

// ==========================================================
// 🔹 Ícone padrão do Leaflet
// ==========================================================
const getIconByTipo = () => {
  return new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -55],
    shadowSize: [50, 64],
    shadowAnchor: [15, 64],
  });
};

// Função para pegar imagem interna ou externa
const getImage = (obra) => {
  if (typeof obra.imagem === "number") {
    const img = GalleryData.find((g) => g.id === obra.imagem);
    return img?.src || "";
  }
  return obra.imagem; // URL externa
};

export default function Mapa() {
  const navigate = useNavigate();

  const [showFilters, setShowFilters] = useState(false);
  const [tipo, setTipo] = useState("Todos");
  const [decada, setDecada] = useState("Todas");
  const [arquiteto, setArquiteto] = useState("");

  const [obraSelecionada, setObraSelecionada] = useState(null);

  // FILTROS
  const obrasFiltradas = obrasData.filter((obra) => {
    const filtroTipo = tipo === "Todos" || obra.tipo.toLowerCase() === tipo.toLowerCase();
    const filtroDecada = decada === "Todas" || obra.decada.toLowerCase() === decada.toLowerCase();
    const filtroArquiteto = arquiteto === "" || obra.autor.toLowerCase().includes(arquiteto.toLowerCase());
    return filtroTipo && filtroDecada && filtroArquiteto;
  });

  // SIDEBAR
  const SidebarObra = ({ obra, onClose, onVerDetalhes }) => (
    <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-2xl p-5 z-[999] rounded-r-2xl">
      <button onClick={onClose} className="text-gray-500 hover:text-black float-right">
        ✖
      </button>

      <h2 className="text-xl font-bold text-[#0A192F] mt-2">{obra.nome}</h2>
      <p className="italic text-gray-600 mb-3">{obra.autor}</p>

      <img
        src={getImage(obra)}
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

  // INTERFACE PRINCIPAL
  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col">
      <Navbar />

      <main className="relative w-full h-[100vh]">

        {/* BOTÃO FILTROS */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="absolute top-5 right-5 z-[1000] bg-white text-[#0A192F] border border-gray-200 shadow-md px-5 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
        >
          {showFilters ? "Fechar filtros" : "Abrir filtros"}
        </button>

        {/* DROPDOWN FILTROS */}
        {showFilters && (
          <div className="absolute top-20 right-6 z-[1000] bg-white rounded-2xl shadow-lg p-6 w-72 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0A192F] mb-6">🔍 Filtros</h2>

            <label className="block text-sm font-semibold text-gray-700 mb-1">Tipo de Obra</label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full mb-4 border border-gray-300 rounded-md p-2"
            >
              <option>Todos</option>
              <option>Religiosa</option>
              <option>Institucional</option>
              <option>Comercial</option>
              <option>Residencial</option>
              <option>Escolar/Educacional</option>
            </select>

            <label className="block text-sm font-semibold text-gray-700 mb-1">Década</label>
            <select
              value={decada}
              onChange={(e) => setDecada(e.target.value)}
              className="w-full mb-4 border border-gray-300 rounded-md p-2"
            >
              <option>Todas</option>
              <option>1950</option>
              <option>1960</option>
              <option>1970</option>
              <option>1980</option>
            </select>

            <label className="block text-sm font-semibold text-gray-700 mb-1">Arquiteto</label>
            <input
              type="text"
              value={arquiteto}
              onChange={(e) => setArquiteto(e.target.value)}
              placeholder="Buscar arquiteto..."
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
            />
          </div>
        )}

        {/* MAPA */}
        <MapContainer
          center={[-15.801, -47.88]}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full z-[1]"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {obrasFiltradas.map((obra) => (
            <Marker
              key={obra.id}
              position={obra.coordenadas}
              icon={getIconByTipo()}
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
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 px-3 py-2 min-w-[160px] max-w-[200px] transition-all hover:scale-[1.03]">

                  <p className="font-bold text-[#0A192F] text-sm mb-1">
                    {obra.nome}
                  </p>

                  <p className="text-gray-600 text-xs italic mb-2">
                    {obra.autor} • {obra.decada}
                  </p>

                  <div className="relative w-full h-[60px] mb-2 overflow-hidden rounded-md">
                    <img
                      src={getImage(obra)}
                      alt={obra.nome}
                      className="object-cover w-full h-full"
                    />
                  </div>

                </div>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>

        {/* SIDEBAR */}
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
