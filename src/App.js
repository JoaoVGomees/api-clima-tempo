import './App.css';
import { useState } from 'react';
import { Card } from './components/Card';
import CardSemana from './components/CardSemana';
import { Information } from './components/Information';
import { requestWeather } from './functions/Buscar';
import { RequestWeatherAll } from './functions/BuscaAll';


function App() {
  const [dados, setDados] = useState({
    nome: 'Cidade',
    temp: 'Temperatura',
    desc: 'Descrição'
  });

  const [allDados, setAllDados] = useState([]);

  const buscarClima = (cidade) => {
    requestWeather(cidade, setDados);
    RequestWeatherAll(cidade, setAllDados)
  }

  return (
    <div className="body">
      <div className="content">
        <Card dados={dados} setDados={setDados} buscarClima={buscarClima}/>
        <Information dados={dados}/>
      </div>
      
      <div className='dias-semana'>
        {
          allDados.map((item, index) => {
            return <CardSemana key={index} dados={item}/>
          })
        }
      </div>
    </div>
  );
}

export default App;