export function RequestWeatherAll(cidade, setAllDados) {

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&lang=pt_br&appid=777fd6c175f16899b669ab9b22be7638&units=metric`;

  fetch(url)
        .then(resposta =>{
          return resposta.json();
        })
          .then(dados =>{
            const horario = "15:00:00";

            const dadosFiltrados = dados.list.filter((item) => {
              return item.dt_txt.includes(horario);
            })

            const allDadosLimpo = dadosFiltrados.map((item) => {
              const dataNaoFormatada = item.dt_txt.split(' ')[0];
              const [ano, mes, dia] = dataNaoFormatada.split('-');
              const dataFormatada = `${dia}/${mes}/${ano}`;

              return {
                dia: dataFormatada,
                temp: item.main.temp + 'º',
                desc: item.weather[0].description
              };
            })

            setAllDados(allDadosLimpo)
          })
          .catch(erro => {
            console.log(erro);
          })

}