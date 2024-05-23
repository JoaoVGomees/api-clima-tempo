export function requestWeather(cidade, setDados) {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=777fd6c175f16899b669ab9b22be7638&units=metric`;

  fetch(url)
  .then(resposta =>{
    return resposta.json();
  })
  .then(dados =>{
    if (dados.cod !== 200) {
      throw new Error(dados.message);
    }
    const descLowerCase = dados.weather[0].description;
    const descLimpa = descLowerCase[0].toUpperCase() + descLowerCase.slice(1);
    setDados({
      nome: dados.name,
      temp: dados.main.temp + 'º',
      desc: descLimpa
    });
          })
          .catch(erro => {
            console.log(erro);
          })
} 
