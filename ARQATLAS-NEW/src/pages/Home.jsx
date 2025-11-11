import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/BannerHome/BannerHome";
import NewsSection from "../Components/NewsSection/NewsSections";
import SectionSociais from "../Components/SectionSociais/SectionSociais";
import { HomeBanners } from "../Data/BannerData.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-white  flex flex-col">
      <div className="bg-red-500 text-white p-4">Teste Tailwind</div>

      <NavBar />
      <Banner images={HomeBanners} />
      <SectionSociais />
      <NewsSection />
      {/* <Footer /> */}
    </main>
  );
}
{
  /* DESENVOLVIDO POR JOÃO GABRIEL SOUTO 
     -https://www.linkedin.com/in/gabrielsouto01
     -https://github.com/soutozk
     -https://www.instagram.com/soutozk/ */
}
