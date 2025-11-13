import React from "react";

const GalleryGrid = ({ images = [] }) => {
  return (
    <div className="">
      {/* Cabeçalho */}
      <div className="flex items-start justify-between pl-8 pr-8 pt-8">
        <h2 className="text-4xl font-bold text-[#C54930]">
          Coletânea de Imagens
        </h2>
      </div>

      {/* CONTAINER CENTRALIZADO */}
      <div className="w-full flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* GRADE ESQUERDA 2x2 */}
          <div className="grid grid-cols-2 gap-4 w-[450px] h-[450px]">
            {[0, 1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden bg-gray-300 w-full h-full">
                {images[idx] && (
                  <img
                    src={images[idx]}
                    className="w-full h-full object-cover"
                    alt={`Imagem ${idx + 1}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* FOTO GRANDE */}
          <div className="rounded-xl overflow-hidden bg-gray-300 w-[450px] h-[450px]">
            {images[4] && (
              <img
                src={images[4]}
                className="w-full h-full object-cover"
                alt="Imagem principal"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
