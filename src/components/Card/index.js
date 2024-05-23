import './index.css';
import { Botao } from '../Botao';
import { Input } from '../Input';
import { useState } from 'react';
import { requestWeather } from '../../functions/Buscar';

export function Card({ dados, setDados }) {
  const [cidade, setCidade] = useState('');

  const handleClick = () => {
    if (!cidade.trim()) { 
      console.log("Por favor, insira o nome da cidade.");
      return;
    }
    requestWeather(cidade, setDados); 
  };

  return (
    <div className="input-card">
      <Input
        content="Nome da cidade:"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <Botao onClick={handleClick} content="Buscar" />
    </div>
  );
} 