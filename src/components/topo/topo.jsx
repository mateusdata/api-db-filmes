import React from 'react';
import Rodape from '../footer/rodape';
import Cabecalhos from '../header/cabecalho';

const Topo = (props) => {
    return (
        <div>
         <Cabecalhos/>   

        <div>
        {props.children}

        </div>
        <Rodape/>
        </div>
    );
}

export default Topo;
