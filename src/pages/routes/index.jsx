import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalhes from "../../components/detalhes/detalhes";
import MaisAssistido from "../home/mais assistido/maisAssistido";
import ProximosFIlmes from "../home/proximos filmes/proximosFIlmes";

export default function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MaisAssistido />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route path="*" element={<p style={{ color: "red",height:"60vh", marginTop:"10vh" }}>Essa pagina não existe erro 404</p>} />
          <Route path="/proximos" element={<ProximosFIlmes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
