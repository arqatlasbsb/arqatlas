import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/BannerHome/BannerHome";
import NewsSection from "../Components/NewsSection/NewsSections";
import SectionSociais from "../Components/SectionSociais/SectionSociais";
import { HomeBanners } from "../Data/BannerData.js";
import GalleryGrid from "../Components/GalleryGrid/GalleryGrid.jsx";

const imagens = [
  "/foto1.jpg",
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpg",
  "/foto5.jpg",
  "/foto6.jpg",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white  flex flex-col">
      <NavBar />
      <Banner images={HomeBanners} />
      <GalleryGrid images={imagens} />
      <SectionSociais />
      <NewsSection />
      {/* <Footer /> */}
    </main>
  );
}
