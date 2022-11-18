//import Filmes from './pages/home/filmes';
import './App.css';
import Rotas from './pages/routes';
import React from 'react';
import Rodape from './components/footer/rodape';
import Ca from './components/header/cabecalho';


function App() {
  return (
     <div className='App'>
      
      <Ca/>
      <Rotas/>
      <Rodape/>
     </div> 
  );
}

export default App;
