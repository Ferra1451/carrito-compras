import React, { useState } from 'react';
import Header from './components/Header';
import Listado from './components/Listado';

function App() {

  const [contador, setContador] = useState(0);

  const incrementarCant = () => {
    setContador(contador +1);
  }

  return (
    <div className="App">
      <Header contador={ contador } />
      <Listado incrementarCant={ incrementarCant } />
    </div>
  );
}

export default App;
