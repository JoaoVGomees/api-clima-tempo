import './App.css';
import { Card } from './components/Card';
import CardSemana from './components/CardSemana';
import { Information } from './components/Information';


function App() {
  return (
    <div className="body">
      <div className="content">
        <Card />
        <Information />

      </div>
      <div className='dias-semana'>
        <CardSemana />
      </div>
    </div>
  );
}

export default App;