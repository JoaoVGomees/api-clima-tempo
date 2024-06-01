import './index.css';
import { Botao } from '../Botao';
import { Input } from '../Input';
import { useState } from 'react';

export function Card({ dados, setDados, buscarClima }) {
  const [cidade, setCidade] = useState('');

  const handleClick = () => {
    if (!cidade.trim()) { 
      console.log("Por favor, insira o nome da cidade.");
      return;
    }
    buscarClima(cidade); 
  };

  return (
    <div className="input-card">
      <Input
        content="Nome da cidade:"
        value={cidade}
        onChange={(event) => {
          return setCidade(event.target.value)
        }}
      />
      <Botao onClick={handleClick} content="Buscar" />
    </div>
  );
} 