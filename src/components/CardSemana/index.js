import './index.css';

export default function CardSemana({ dados }) {
  return (
    <div className="card-semana">
      <h2>Dia</h2>
      <output>{dados.dia}</output>

      <h2>Temperatura </h2>
      <output>{dados.temp}</output>

      <h2>Situação</h2>
      <output>{dados.desc}</output>
    </div>
  );
}