document.addEventListener("mediasProntas", () => {
  const m = window.medias;

  const limites = {
    kda: 5,
    dpm: 1000,
    gpm: 600,
    vision: 70,
    cs: 10,
  };

  function normalizar(valor, maximo) {
    return Math.min((valor / maximo) * 100, 100);
  }

  const playerData = [
    normalizar(m.kda, limites.kda),
    normalizar(m.dpm, limites.dpm),
    normalizar(m.gpm, limites.gpm),
    normalizar(m.vision, limites.vision),
    normalizar(m.cs, limites.cs),
  ];

  const maiorValor = Math.max(...playerData);
  const limiteAjustado = Math.max(maiorValor * 1.25, 40);

  const data = {
    labels: ["KDA", "Dano por minuto", "Ouro por minuto", "Visão", "CS"],
    datasets: [
      {
        label: "Jogador",

        data: playerData,
        fill: true,
        backgroundColor: "rgba(191, 161, 87, 0.22)",
        borderColor: "rgba(191, 161, 87, 0.95)",
        borderWidth: 2.2,
        pointBackgroundColor: "#7038ff",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#7038ff",
        pointRadius: 2,
        pointHoverRadius: 3,
      },
    ],
  };

  const config = {
    type: "radar",
    data: data,
    options: {
      responsive: true,
      aspectRatio: 1,
      animations: {
        tension: { duration: 1700, easing: "easeInOutQuart" },
      },

      scales: {
        r: {
          min: 0,
          max: limiteAjustado,
          ticks: { display: false },
          grid: {
            color: "rgba(255,255,255,0.05)",
            lineWidth: 1,
          },
          angleLines: {
            color: "rgba(255,255,255,0.08)",
            lineWidth: 1.1,
          },
          pointLabels: {
            color: "rgb(191, 161, 87)",
            font: { size: 14, weight: "600" },
            padding: 10,
          },
        },
      },
      plugins: {
        legend: { display: false },
      },
    },
  };

  const ctx = document.getElementById("player-status");
  const chart = new Chart(ctx, config);
});
