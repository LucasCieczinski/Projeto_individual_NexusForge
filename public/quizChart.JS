  function plotarGrafico(porcentagens) {
    console.log("Recebido:", porcentagens);

  const dadosFinal = [];
  var dataTop = 0;
  var dataJg = 0;
  var dataMid = 0;
  var dataAdc = 0;
  var dataSup = 0;

  for (let i = 0; i < porcentagens.length; i++) {
    if(porcentagens[i].lane == "top"){
      dataTop = porcentagens[i].porcentagem
    }else if(porcentagens[i].lane == "jungle"){
      dataJg = porcentagens[i].porcentagem
    }else if(porcentagens[i].lane == "mid"){
      dataMid = porcentagens[i].porcentagem
    }else if(porcentagens[i].lane == "adc"){
      dataAdc = porcentagens[i].porcentagem
    }else if(porcentagens[i].lane == "sup"){
      dataSup = porcentagens[i].porcentagem
    }
  }
  
  dadosFinal.push(dataTop, dataJg, dataMid, dataAdc, dataSup)



  const data = {
    labels: ["Top", "Jungle", "Mid", "ADC", "Suporte"],
    datasets: [
      {
        label: "Popularidade",
        data: dadosFinal,
        borderWidth: 2,
        backgroundColor: "rgba(191, 161, 87, 0.9)",
        borderColor: "rgba(255, 215, 120, 0.9)",
        hoverBackgroundColor: "rgba(255, 215, 120, 1)",
      }
    ]
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        x: {
          grid: {
            color: "rgba(255,255,255,0.05)",
          },
          ticks: {
            color: "#c9c9c9",
            font: { size: 13 }
          }
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#e1dbdb",
            font: { size: 14 }
          }
        }
      },

      plugins: {
        legend: { display: false },

        tooltip: {
          backgroundColor: "rgba(20,20,20,0.9)",
          titleColor: "#e1dbdb",
          bodyColor: "#c9c9c9",
          borderColor: "rgba(191,161,87,0.4)",
          borderWidth: 1,
          padding: 10,
          displayColors: false,
        }
      },

      elements: {
        bar: {
          borderRadius: 8,
        }
      }
    }
  };


  const ctx = document.getElementById("ranking-chart");
  const chart = new Chart(ctx, config);
  }