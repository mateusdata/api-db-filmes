import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
//<a className='link-a' href="/proximos">Proximos filmes</a>
//<a className='link-a'  href="/">Mais assistido</a>
export default function Cabecalhos() {
    
  return (
    <section className="cabecalho">
      <h1 className="sugestao">Sugestão de filmes</h1>
      <div className="link">
        <Link className="link-a" to="/proximos">Proximos filmes</Link>
        <Link className="link-a" to="/">Mais assistido</Link>
      </div>
    </section>
  );
}
