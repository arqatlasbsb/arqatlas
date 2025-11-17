import React, { useState } from "react";

const CarouselHome = ({ imagens = [], onClickImagem }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % imagens.length);
  const prev = () => setIndex((i) => (i - 1 + imagens.length) % imagens.length);

  const visibles = [
    imagens[index],
    imagens[(index + 1) % imagens.length],
    imagens[(index + 2) % imagens.length],
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-4">
        <button onClick={prev} className="px-3 py-1  rounded-lg">
          ‹
        </button>

        <div className="flex gap-4">
          {visibles.map((img, i) => (
            <div
              key={i}
              className="w-32 h-32 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => onClickImagem((index + i) % imagens.length)}>
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <button onClick={next} className="px-3 py-1  rounded-lg">
          ›
        </button>
      </div>
    </div>
  );
};

export default CarouselHome;
