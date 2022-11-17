import React from 'react';
import "./styles.css";


const Cabecalho = () => {
    return (
        <div  className='cabecalho'>
            <h1 className='h' >Suestão de filmes</h1> 
            <div className='link'>
                <a className='link-a' href="/proximos">proximos filmes</a>
                <a className='link-a'  href="/">Mais assistido</a>
            </div>
        </div>
    );
}

export default Cabecalho;
