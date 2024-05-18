import './index.css';

export function Information() {
  return (
    <div className="information">
      <h2>Nome</h2>
      <output id="city">Cidade</output>
      <h2>Temperatura</h2>
      <output id="tempe">Temperatura</output>
      <h2>Situação</h2>
      <output id="clima">Clima</output>
    </div>
  );
}