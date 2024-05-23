import './App.css';
import { useState } from 'react';
import { Card } from './components/Card';
import CardSemana from './components/CardSemana';
import { Information } from './components/Information';


function App() {
  const [dados, setDados] = useState({
    nome: 'Cidade',
    temp: 'Temperatura',
    desc: 'Descrição'
  });

  return (
    <div className="body">
      <div className="content">
        <Card dados={dados} setDados={setDados}/>
        <Information dados={dados}/>
      </div>
      
      <div className='dias-semana'>
        <CardSemana />
      </div>
    </div>
  );
}

export default App;