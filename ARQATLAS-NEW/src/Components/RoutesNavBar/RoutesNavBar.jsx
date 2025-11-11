import { useNavigate } from "react-router-dom";

const RoutesNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-8 ">
      <a
        href="/sobre"
        className="relative text-[#244A67] font-bold text-xl transition-colors 
        after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 
        after:h-[2px] after:bg-[#C54930] after:transition-all after:duration-500 
        after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0">
        Mapa
      </a>

      <a
        href="#produtos"
        className="relative text-[#244A67] font-bold text-xl transition-colors 
        after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 
        after:h-[2px] after:bg-[#C54930] after:transition-all after:duration-500 
        after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0">
        Galeria
      </a>

      <a
        href="/ouvidoria"
        className="relative text-[#244A67] font-bold text-xl transition-colors 
        after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 
        after:h-[2px] after:bg-[#C54930] after:transition-all after:duration-500 
        after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0">
        Equipe
      </a>

      <a
        href="https://www.unicollege.net/cerrado/io03/Validador.aspx"
        className="relative text-[#244A67] font-bold text-xl transition-colors 
        after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 
        after:h-[2px] after:bg-[#C54930] after:transition-all after:duration-500 
        after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0">
        Sobre
      </a>
    </div>
  );
};

export default RoutesNavBar;

/* DESENVOLVIDO POR JOÃO GABRIEL SOUTO
   - https://www.linkedin.com/in/gabrielsouto01
   - https://github.com/soutozk
   - https://www.instagram.com/soutozk/
*/
