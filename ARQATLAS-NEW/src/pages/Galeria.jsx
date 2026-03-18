import React, { useEffect, useState, useMemo } from "react";
import galleryData from "../Data/GalleryData";
import NavBar from "../Components//NavBar/NavBar.jsx";

const Galeria = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [visibleImages, setVisibleImages] = useState([]);

  // Mostra inicialmente uma quantidade fixa (12)
  const INITIAL_COUNT = 12;

  // Filtro + busca
  const filtered = useMemo(() => {
    return galleryData.filter((img) => {
      const matchQuery = img.title.toLowerCase().includes(query.toLowerCase());
      const matchCat = category === "all" || img.category === category;
      return matchQuery && matchCat;
    });
  }, [query, category]);

  // Troca automática das imagens a  cada 30s
  useEffect(() => {
    let index = 0;

    const update = () => {
      const start = index * INITIAL_COUNT;
      const end = start + INITIAL_COUNT;

      if (start >= filtered.length) index = 0;

      setVisibleImages(filtered.slice(start, end));
      index++;
    };

    update();
    const interval = setInterval(update, 30000);

    return () => clearInterval(interval);
  }, [filtered]);

  // Pega categorias automaticamente
  const categories = [
    "all",
    ...new Set(galleryData.map((img) => img.category)),
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-screen  p-8">
        <h1 className="text-5xl font-semibold text-center mb-10 tracking-wide">
          Acervo <span className="text-[#244A67] font-bold">ArqAtlas</span>
        </h1>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
          <input
            type="text"
            placeholder="Buscar edifício, nome..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* grid de imagens  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
          {visibleImages.map((img) => (
            <div
              key={img.id}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all flex items-end p-4 opacity-0 group-hover:opacity-100">
                <p className="text-lg font-semibold text-[#F94B28]">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-neutral-400 mt-20 text-xl">
            Nenhuma imagem encontrada.
          </p>
        )}
      </div>
    </>
  );
};

export default Galeria;
