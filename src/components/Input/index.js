import './index.css'

export function Input(props) {
  return (
    <div>
      <label className="label-input">{props.content}</label>
      <input placeholder='Digite o nome ' type="text" className="nomeCidade" />
    </div>
  );
}