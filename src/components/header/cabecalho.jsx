import   React from 'react';
import "./styles.css";
//import { Link } from 'react-router-dom';
//<a className='link-a' href="/proximos">Proximos filmes</a>
//<a className='link-a'  href="/">Mais assistido</a>
export default function Cabecalhos(){

    return (
        <div  className='cabecalho'>
            <h1 className='h' >Sugestão de filmes</h1> 
            <div className='link'>
            <a className='link-a' href="/proximos">Proximos filmes</a>
            <a className='link-a'  href="/">Mais assistido</a>
          {/* <Link to="/proximos"></Link>
           <Link to="/">Mais assistido</Link>*/}
            </div>
        </div>
    );
}


