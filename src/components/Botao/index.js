import './index.css'
import Buscar from '../../functions/Buscar';
import BuscarAll from '../../functions/BuscaAll';


export function Botao(props) {
  return (
    <div>
      <button onClick={Buscar.Buscar} className="btn">{props.content}</button>
      <button onClick={BuscarAll} className="btn">{props.teste}</button>
    </div>
  );
}
