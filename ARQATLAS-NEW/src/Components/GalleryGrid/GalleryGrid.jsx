import React from "react";
import Background from "../../images/Background/BackgorundGaleriaComponet.png";

const GalleryGrid = ({ images = [], imagemIndex = 0, onSelect }) => {
  const principal = images[imagemIndex];

  const outras = images.filter((_, i) => i !== imagemIndex);

  return (
    <div className="bg-white p-[1%]">
      <div
        className="w-full bg-cover bg-center rounded-xl shadow-lg"
        style={{ backgroundImage: `url(${Background})` }}>
        {/* Cabeçalho */}
        <div className="flex items-start justify-between pl-8 pt-14">
          <h2 className="text-4xl font-bold text-white">
            Coletânea de Imagens
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <div className="p-[1%] m-4 rounded-xl shadow-lg flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ESQUERDA 2x2 */}
              <div className="grid grid-cols-2 gap-4 w-[450px] h-[450px]">
                {outras.slice(0, 4).map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden bg-gray-300 w-full h-full cursor-pointer"
                    onClick={() => onSelect(images.indexOf(img))}>
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* FOTO GRANDE */}
              <div className="rounded-xl overflow-hidden bg-gray-300 w-[450px] h-[450px] cursor-pointer">
                <img src={principal} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
