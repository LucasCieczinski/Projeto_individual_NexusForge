const data = {
  labels: [
    "KDA",
    "Dano por minuto",
    "Ouro por minuto",
    "Visão",
    "Objetivos",
    "CS",
  ],
  datasets: [
    {
      label: "Jogador",
      data: [45, 50, 50, 50, 50, 50],
      fill: true,
      borderColor: "rgba(181, 176, 33, 1)",
      backgroundColor: "rgba(181, 176, 33, 0.5)",
      pointBackgroundColor: "rgb(181, 176, 33)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(181, 176, 33)",
    },
    {
      label: "Média do elo",
      data: [70, 60, 75, 72, 71, 65],
      fill: true,
      borderColor: "rgba(112, 56, 255, 1)",
      backgroundColor: "rgba(112, 56, 255, 0.5)",
      pointBackgroundColor: "rgb(164, 109, 228)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(164, 109, 228)",
    },
  ],
};


const config = {
  type: "radar",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    scales: {
      r: {
        angleLines: {
          color: "rgb(60, 60, 60)",
        },
        grid: {
          color: 'rgb(60, 60, 60)'
        }, 
        pointLabels: {
          color: 'white',
          font: {
            size: 10,
            weight: 'bold'
          },
        },
        min: 0,
        max: 100,
        ticks: {
          beginAtZero: true,
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    plugins: {
    legend: {
        display: true,
        position: 'bottom',
      labels: {
        font: {
            size: 12,
        }
      }
    },
    title: {
        display: true, 
        text: 'Gráfico de Desempenho', 
        color: 'rgb(191, 161, 87)', 
        font: { 
          size: 18,
          weight: 'bold'
        },
    }
  }
},
  };

const ctx = document.getElementById("player-status");
const chart = new Chart(ctx, config);
