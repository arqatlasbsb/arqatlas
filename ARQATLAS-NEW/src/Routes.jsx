import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< Updated upstream
=======
import Mapa from "./pages/Mapa";
import ObraDetalhes from "./pages/ObraDetalhes";
import Galeria from "./pages/Galeria";
>>>>>>> Stashed changes

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
=======
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/obra/:id" element={<ObraDetalhes />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default AppRoutes;
