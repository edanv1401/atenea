import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CursosPage from "./pages/CursosPage";
import RetosPage from "./pages/RetosPage";
import PerfilPage from "./pages/PerfilPage";
import "./index.css";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Layout isDark={isDark} toggleTheme={() => setIsDark((prev) => !prev)}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/retos" element={<RetosPage isDark={isDark} />} />
        <Route path="/perfil" element={<PerfilPage />} />
      </Routes>
    </Layout>
  );
}
