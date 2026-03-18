import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import obras from "../../Data/obras.json";
import GalleryData from "../../Data/GalleryData";
import "./MapView.css";

// ===============================
// 🔹 Ícone padrão azul
// ===============================
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -55],
});

// ===============================
// 🔹 Componente principal do mapa
// ===============================
const MapView = ({ modo = "completo", onSelectObra }) => {
  const navigate = useNavigate();
  const isHome = modo === "home";

  // Retorna TODAS as imagens da obra usando a categoria dela
  const getGalleryImages = (obra) => {
    if (!obra.categoriaGaleria) return [];
    return GalleryData.filter(
      (img) =>
        img.category.toLowerCase() === obra.categoriaGaleria.toLowerCase()
    ).map((img) => img.src);
  };

  return (
    <div className={`map-wrapper ${isHome ? "home-map" : "full-map"}`}>
      <MapContainer
        center={[-15.7990489, -47.873]}
        zoom={isHome ? 13 : 14}
        scrollWheelZoom={true}
        dragging={true}
        className="leaflet-map">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* MARCADORES */}
        {obras.map((obra) => (
          <Marker
            key={obra.id}
            position={obra.coordenadas}
            icon={markerIcon}
            eventHandlers={{
              click: () => {
                if (isHome) {
                  const imagens = getGalleryImages(obra);
                  onSelectObra?.({ ...obra, imagens });
                } else {
                  navigate(`/obra/${obra.id}`);
                }
              },
            }}>
            <Tooltip
              direction="top"
              offset={[0, -50]}
              opacity={1}
              className="!bg-transparent !border-none !shadow-none">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 px-3 py-2 min-w-[160px] max-w-[200px] transition-all duration-200 hover:scale-[1.03]">
                <p className="font-bold text-[#0A192F] text-sm mb-1">
                  {obra.nome}
                </p>

                <p className="text-gray-600 text-xs italic mb-2">
                  {obra.autor} • {obra.decada}
                </p>

                {/* Miniatura */}
                <div className="relative w-full h-[60px] mb-2 overflow-hidden rounded-md">
                  <img
                    src={obra.imagem || getGalleryImages(obra)[0]}
                    alt={obra.nome}
                    className="object-cover w-full h-full"
                  />
                </div>

                {!isHome && (
                  <button
                    onClick={() => navigate(`/obra/${obra.id}`)}
                    className="text-xs bg-[#0A192F] text-white px-2 py-1 rounded-md hover:bg-[#132c57] transition w-full">
                    Ver detalhes
                  </button>
                )}
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
