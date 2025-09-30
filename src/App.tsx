
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Integrantes from "./pages/Integrantes";
import IntegranteDetalhe from "./pages/IntegranteDetalhe";
import FAQ from "./pages/FAQ";
import Projeto from "./pages/Projeto";
import Contato from "./pages/Contato";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect example: update document title based on route
  useEffect(() => {
    const map: Record<string, string> = {
      "/": "Home - Invox",
      "/integrantes": "Quem Somos - Invox",
      "/faq": "FAQ - Invox",
      "/projeto": "Projeto - Invox",
      "/contato": "Contato - Invox",
    };
    document.title = map[location.pathname] ?? "Invox";
  }, [location.pathname]);

  // Example useNavigate: logo click sends to home
  const handleLogoClick = () => navigate("/");

  return (
    <div className="min-h-screen flex flex-col">
      <Header onLogoClick={handleLogoClick} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes/:id" element={<IntegranteDetalhe />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<div className='p-8 text-center'>Página não encontrada.</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
