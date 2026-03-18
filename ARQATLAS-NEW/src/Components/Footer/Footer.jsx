import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok } from "react-icons/fa";

import logoceub from "../../images/Logo/LogoCeubFooter.png";
import logoarq from "../../images/Logo/LogoArq.png";
import bgDecorativo from "../../images/Footer/bgDecorativo.png";

export default function Footer() {
  return (
    <footer
      className="relative text-white pt-20 pb-12 overflow-hidden bg-[#071738]"
      style={{
        backgroundImage: `url(${bgDecorativo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col items-center md:items-start gap-6 z-10">
          <img src={logoarq} alt="ArqAtlas" className="w-36" />
          <img src={logoceub} alt="CEUB" className="w-32" />
        </div>

        <div className="flex flex-col items-center gap-3 text-center z-10">
          <h3 className="text-lg font-semibold">Links Rápidos</h3>
          <Link to="/mapa" className="hover:underline">
            Mapa
          </Link>
          <Link to="/galeria" className="hover:underline">
            Galeria
          </Link>
          <Link to="/equipe" className="hover:underline">
            Equipe
          </Link>
          <Link to="/sobre" className="hover:underline">
            Sobre
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start gap-3 z-10">
          <h3 className="text-lg font-semibold">Nossas Redes</h3>

          <div className="flex gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg hover:bg-white/30 transition">
              <FaInstagram size={22} />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg hover:bg-white/30 transition">
              <FaTiktok size={22} />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-12 opacity-80 relative z-10">
        Todos Direitos Reservados
      </p>
    </footer>
  );
}
