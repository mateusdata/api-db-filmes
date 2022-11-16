import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filmes from "../home/filmes";
import Detalhes from "../home/detalhes/detalhes";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Filmes/>} />
        <Route  path="/detalhes/:id" element={<Detalhes/>}/>
        <Route  path="*" element={<p>Essa pagina não existe erro 404</p>}/>

      </Routes>
    </BrowserRouter>
  );
}
