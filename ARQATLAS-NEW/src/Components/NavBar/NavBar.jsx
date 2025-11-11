import React from "react";
import RoutesNavBar from "../RoutesNavBar/RoutesNavBar";
import logoceub from "../../images/Logo/LogoCeub.png";
import logoarq from "../../images/Logo/LogoArq.png";

const Navbar = () => {
  return (
    <header
      className="w-full bg-white overflow-hidden"
      style={{
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}>
      <div className="flex items-center justify-between px-8 ">
        {/* LOGOS (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <img
            src={logoceub}
            alt="Logo do CEUB"
            className="h-16 w-auto object-contain"
          />
          <img
            src={logoarq}
            alt="Logo Atlas de Arquitetura de Brasília"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* LOGO ATLAS (Mobile) */}
        <div className="flex md:hidden w-full justify-center">
          <img
            src={logoarq}
            alt="Logo Atlas de Arquitetura de Brasília"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex flex-1 justify-center">
          <RoutesNavBar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
