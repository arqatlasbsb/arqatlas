import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import obras from "../../Data/obras.json";
import "./MapView.css";

// Ícone personalizado
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [28, 42],
  iconAnchor: [14, 42],
  popupAnchor: [0, -35],
});

const MapView = ({ modo = "completo" }) => {
  const navigate = useNavigate();

  // Define tamanho e comportamento conforme o modo
  const isHome = modo === "home";

  return (
    <div className={`map-wrapper ${isHome ? "home-map" : "full-map"}`}>
      <MapContainer
        center={[-15.793889, -47.882778]}
        zoom={isHome ? 12 : 13}
        scrollWheelZoom={!isHome}
        dragging={!isHome}
        className="leaflet-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {obras.map((obra, index) => (
          <Marker
            key={index}
            position={[obra.coordenadas[0], obra.coordenadas[1]]}
            icon={markerIcon}
            eventHandlers={{
              click: () => navigate(`/obra/${obra.id}`),
            }}
          >
            <Popup>
              <strong>{obra.nome}</strong>
              <br />
              {obra.autor || "Autor desconhecido"} — {obra.decada}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
