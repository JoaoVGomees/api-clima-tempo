export default function BuscarAll() {

  const cidade = document.querySelector('.nomeCidade').value;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&lang=pt_br&appid=777fd6c175f16899b669ab9b22be7638&units=metric`;

  const data = document.querySelector('.dia');

  fetch(url)
        .then(resposta =>{
          return resposta.json();
        })
          .then(dados =>{

            console.log(dados);
            console.log(dados.list[0].dt_txt);
             data.innerText = dados.list[0].dt_txt;
           
            


          })
          .catch(erro => {
            console.log(erro);
          })

}