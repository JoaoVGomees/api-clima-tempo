import './App.css';
import { Card } from './components/Card';
import { Information } from './components/Information';

function App() {
  return (
    <div className="body">
      <div className="content">
        <Card />
        <Information />
      </div>
    </div>
  );
}

export default App;