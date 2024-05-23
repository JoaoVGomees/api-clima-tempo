import './index.css'

export function Input({ content, value, onChange }) {
  return (
    <div>
      <label className="label-input">{content}</label>
      <input 
        className="nomeCidade" 
        placeholder="Digite o nome da cidade" 
        type="text" 
        value={value} 
        onChange={onChange} // Certifique-se de que a função onChange seja chamada quando o valor do input mudar
      />
    </div>
  );
}
