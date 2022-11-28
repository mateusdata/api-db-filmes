import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalhes from "../../components/detalhes/detalhes";
import DetalhesClassificacao from "../../components/detalhes/detalhesClassificacao";
import DetalhesTv from "../../components/detalhes/detalhesTv";
import Proximos from "../../components/detalhes/proximos";
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
          <Route path="/maisassistido/detalhes/id/:id" element={<Detalhes />} />
          <Route path="/proximos/detalhes/id/:id" element={<Proximos />} />
          <Route path="/classificacao/detalhes/id/:id" element={<DetalhesClassificacao />} />
          <Route path="/natv/detalhes/id/:id" element={<DetalhesTv />} />
         
          
          <Route path="*" element={<p style={{ color: "red",height:"60vh", marginTop:"10vh" }}>Essa pagina não existe erro 404</p>} />
          <Route path="/proximos" element={<ProximosFIlmes />} />
          <Route path="/melhor-classificacao" element={<MelhorClassificacao/>}/>
          <Route path="/natv" element={<NaTv/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
