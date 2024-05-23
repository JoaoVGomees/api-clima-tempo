import { useState } from "react";

let name = '';
let temp = '';
let desc = '';

function Buscar() {

  const cidade = document.querySelector('.nomeCidade').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=777fd6c175f16899b669ab9b22be7638&units=metric`;

  fetch(url)
  .then(resposta =>{
    return resposta.json();
  })
  .then(dados =>{
    if (dados.cod !== 200) {
      throw new Error(dados.message);
    }
    return dados
    name = dados.name;
    temp = dados.main.temp + 'º';
    desc = dados.weather[0].description;
    
    // document.querySelector('#city').value = dados.name;
    // document.querySelector('#tempe').value = dados.main.temp + 'º';
    // document.querySelector('#clima').value = dados.weather[0].description;
          })
          .catch(erro => {
            console.log(erro);
          })
}
export default {
  Buscar: Buscar,
  nome: name,
  temperatura: temp,
  descricao: desc
}
