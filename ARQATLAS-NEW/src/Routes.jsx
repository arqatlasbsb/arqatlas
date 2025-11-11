import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mapa from "./pages/Mapa";
import ObraDetalhes from "./pages/ObraDetalhes";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/obra/:id" element={<ObraDetalhes />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
