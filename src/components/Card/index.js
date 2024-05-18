import './index.css';
import { Botao } from '../Botao';
import { Input } from '../Input';

export function Card() {
  return (
    <div className="input-card">
      <Input content="Nome da cidade:"/>
      <Botao content="Buscar"/>
    </div>
  );
}