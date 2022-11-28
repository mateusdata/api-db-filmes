import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalhes from "../../components/detalhes/detalhes";
import DetalhesClassificacao from "../../components/detalhes/detalhesClassificacao";
import DetalhesTv from "../../components/detalhes/detalhesTv";
import NaTv from "../home/conteudo tv/naTv";
import MaisAssistido from "../home/mais assistido/maisAssistido";
import MelhorClassificacao from "../home/melhor classificação/melhorClassificacao";
import ProximosFIlmes from "../home/proximos filmes/proximosFIlmes";

export default function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MaisAssistido />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route path="detalhess/:id" element={<DetalhesClassificacao />} />
          <Route path="/detalhesss/:id" element={<DetalhesTv />} />
          
          <Route path="*" element={<p style={{ color: "red",height:"60vh", marginTop:"10vh" }}>Essa pagina não existe erro 404</p>} />
          <Route path="/proximos" element={<ProximosFIlmes />} />
          <Route path="/melhor-classificacao" element={<MelhorClassificacao/>}/>
          <Route path="natv" element={<NaTv/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
