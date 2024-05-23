import './index.css';
import { useState, useEffect } from 'react';
import Buscar from '../../functions/Buscar';

export function Information() {
  const [stateCidade, setStateCidade] = useState(Buscar.nome);

  return (
    <div className="information">
      <h2>Nome</h2>
      <output id="city">{stateCidade}</output>
      <h2>Temperatura Atual</h2>
      <output id="tempe">Temperatura</output>
      <h2>Situação Atual</h2>
      <output id="clima">Clima</output>
    </div>
  );
}