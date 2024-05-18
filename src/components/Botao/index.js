import './index.css'
import Buscar from '../../functions/Buscar';


export function Botao(props) {
  return (
    <div>
      <button onClick={Buscar} className="btn">{props.content}</button>
    </div>
  );
}
