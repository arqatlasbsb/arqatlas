import React from "react";

const GalleryGrid = ({ images = [] }) => {
  return (
    <div className="">
      {/* Cabeçalho */}
      <div className="flex items-start justify-between pl-8 pr-8 pt-8">
        <h2 className="text-4xl font-bold text-[#C54930]">Galeria</h2>
      </div>
      <div className="flex flex-col items-center w-full">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* FOTO GRANDE */}
          <div className="rounded-xl overflow-hidden bg-gray-300 w-[450px] h-[450px]">
            {images[0] && (
              <img
                src={images[0]}
                className="w-full h-full object-cover"
                alt="Imagem principal da galeria"
              />
            )}
          </div>

          {/* GRADE DIREITA */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            {/* linha 1 */}
            <div className="flex gap-4">
              {/* QUADRADO */}
              <div className="h-[220px] w-[220px] rounded-xl overflow-hidden bg-gray-300">
                {images[1] && (
                  <img
                    src={images[1]}
                    className="w-full h-full object-cover"
                    alt="Imagem 2 da galeria"
                  />
                )}
              </div>

              {/* RETÂNGULO */}
              <div className="h-[220px] w-[400px] rounded-xl overflow-hidden bg-gray-400">
                {images[2] && (
                  <img
                    src={images[2]}
                    className="w-full h-full object-cover"
                    alt="Imagem 3 da galeria"
                  />
                )}
              </div>
            </div>

            {/* linha 2 */}
            <div className="flex gap-4">
              {/* RETÂNGULO */}
              <div className="h-[220px] w-[400px] rounded-xl overflow-hidden bg-gray-400">
                {images[3] && (
                  <img
                    src={images[3]}
                    className="w-full h-full object-cover"
                    alt="Imagem 4 da galeria"
                  />
                )}
              </div>

              {/* QUADRADO */}
              <div className="h-[220px] w-[220px] rounded-xl overflow-hidden bg-gray-300">
                {images[4] && (
                  <img
                    src={images[4]}
                    className="w-full h-full object-cover"
                    alt="Imagem 5 da galeria"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
