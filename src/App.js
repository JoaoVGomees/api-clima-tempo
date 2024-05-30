import './App.css';
import { useState } from 'react';
import { Card } from './components/Card';
import CardSemana from './components/CardSemana';
import { Information } from './components/Information';


function App() {
  const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']

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
        {
          dias.map(dia => {
            return <CardSemana />
          }) 
        }
        <CardSemana />
      </div>
    </div>
  );
}

export default App;