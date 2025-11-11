import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Navbar from "../Components/NavBar/NavBar";
import obrasData from "../Data/obras.json";

// Ícone padrão do Leaflet (pino azul)
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Ajusta automaticamente o centro e o zoom para caber todos os pontos
const AjustarMapa = ({ obras }) => {
  const map = useMap();
  useEffect(() => {
    if (obras.length > 0) {
      const bounds = L.latLngBounds(obras.map((obra) => obra.coordenadas));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, obras]);
  return null;
};

export default function Mapa() {
  const navigate = useNavigate();

  // Estados dos filtros
  const [tipo, setTipo] = useState("Todos");
  const [decada, setDecada] = useState("Todas");
  const [autor, setAutor] = useState("");

  // Filtragem dinâmica
  const obrasFiltradas = obrasData.filter((obra) => {
    const filtroTipo =
      tipo === "Todos" || obra.tipo.toLowerCase() === tipo.toLowerCase();
    const filtroDecada =
      decada === "Todas" || obra.decada.toLowerCase() === decada.toLowerCase();
    const filtroAutor =
      autor === "" ||
      obra.autor.toLowerCase().includes(autor.toLowerCase());
    return filtroTipo && filtroDecada && filtroAutor;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex flex-col md:flex-row items-start px-6 py-8 gap-8 max-w-7xl mx-auto w-full">
        {/* Painel de Filtros */}
        <aside className="bg-white rounded-2xl shadow-md p-6 w-full md:w-80">
          <h2 className="text-2xl font-bold text-[#0A192F] mb-6 flex items-center gap-2">
            <span role="img" aria-label="filtro">🔍</span> Filtros
          </h2>

          {/* Filtro Tipo */}
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

          {/* Filtro Década */}
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

          {/* Filtro Arquiteto */}
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Arquiteto
          </label>
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            placeholder="Buscar arquiteto..."
            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#0A192F]"
          />

          <button className="w-full bg-[#0A192F] text-white py-2 rounded-md hover:bg-[#132c57] transition">
            Aplicar Filtros
          </button>
        </aside>

        {/* Mapa */}
        <section className="flex-1 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-[#0A192F] mb-6 text-center">
            Mapa Interativo de Brasília{" "}
            <span role="img" aria-label="mapa">🗺️</span>
          </h1>

          <div className="w-full h-[75vh] bg-white rounded-2xl shadow-md overflow-hidden">
            <MapContainer
              center={[-15.799, -47.87]}
              zoom={13}
              scrollWheelZoom={true}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <AjustarMapa obras={obrasFiltradas} />

              {obrasFiltradas.map((obra) => (
                <Marker
                  key={obra.id}
                  position={obra.coordenadas}
                  icon={markerIcon}
                  eventHandlers={{
                    click: () => navigate(`/obra/${obra.id}`),
                  }}
                >
                  <Popup>
                    <strong>{obra.nome}</strong>
                    <br />
                    {obra.autor} — {obra.decada}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>
      </main>
    </div>
  );
}
