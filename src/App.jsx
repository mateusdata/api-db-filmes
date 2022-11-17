//import Filmes from './pages/home/filmes';
import './App.css';
import Rotas from './pages/routes';
import React from 'react';
import Cabecalho from './components/header/cabecalho';
import Rodape from './components/footer/rodape';

function App() {
  return (
     <div className='App'>
      <Cabecalho/>
      <Rotas/>
      <Rodape/>
     </div> 
  );
}

export default App;
