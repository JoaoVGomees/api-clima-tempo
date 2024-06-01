import './index.css'

export function Botao({ onClick, content }) {
  return (
    <div>
      <button onClick={onClick } className="btn">{content}</button>
    </div>
  );
}
