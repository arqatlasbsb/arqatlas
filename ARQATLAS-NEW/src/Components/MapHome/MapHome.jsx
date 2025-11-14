import React from "react";
import Mapa from "../MapView/MapView";
import Background from "../../images/Background/BackgroundMapSection.svg";

const MapHome = ({ images = [] }) => {
  return (
    <div
      className="w-full bg-cover bg-center p-8"
      style={{
        backgroundImage: `url(${Background})`,
      }}>
      <div className="flex items-center justify-between gap-8">
        <div className="w-1/2">
          <Mapa modo="home"/>
        </div>

        <div className="w-1/2 flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-black">Nome da obra</h2>
          <p className="text-lg text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quo
            repudiandae illum, tempora laborum quaerat, animi dolor odit
            distinctio, nostrum explicabo ratione vero repellat veniam! Soluta
            illo quasi omnis maxime?
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapHome;
