import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
//<a className='link-a' href="/proximos">Proximos filmes</a>
//<a className='link-a'  href="/">Mais assistido</a>
export default function Cabecalhos() {
    
  return (
    <section className="cabecalho">
      <Link className="link-a" to="/">Pagina inicial</Link>
        <Link className="link-a" to="/proximos">Proximos filmes</Link>
        <Link className="link-a" to="/melhor-classificacao">Melhor classificação</Link>
        <Link className="link-a" to="/natv"> Passando na tv</Link>
     {/* <div className="menu">
      <Link className="link-a" to="/">Pagina inicial</Link>
        <Link className="link-a" to="/proximos">Proximos filmes</Link>
        <Link className="link-a" to="/melhor-classificacao">Melhor classificação</Link>
        <Link className="link-a" to="/natv"> Passando na tv</Link>
  </div>*/}
      <div className="link">
        
      </div>
      <h1 className="sugestao">Sugestão de filmes</h1>
    </section>
  );
}
