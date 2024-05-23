import './index.css';

export function Information({ dados }) {
  
  return (
    <div className="information">
      <h2>Nome</h2>
      <output id="city">{dados.nome}</output>
      <h2>Temperatura Atual</h2>
      <output id="tempe">{dados.temp}</output>
      <h2>Situação Atual</h2>
      <output id="clima">{dados.desc}</output>
    </div>
  );
}