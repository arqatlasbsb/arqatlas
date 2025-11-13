import { Link } from "react-router-dom";

const RoutesNavBar = () => {
  const baseClasses = `
    relative text-[#244A67] font-bold text-xl transition-colors
    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0
    after:h-[2px] after:bg-[#C54930] after:transition-all after:duration-500
    after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0
  `;

  return (
    <div className="flex items-center space-x-8">
      {/* 🔹 Corrigido: agora o botão “Mapa” leva para /mapa */}
      <Link to="/mapa" className={baseClasses}>
        Mapa
      </Link>

      <a href="/galeria" className={baseClasses}></a>

      <a href="#equipe" className={baseClasses}>
        Equipe
      </a>

      <a href="#sobre" className={baseClasses}>
        Sobre
      </a>
    </div>
  );
};

export default RoutesNavBar;
