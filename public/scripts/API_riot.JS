async function obterDados() {
    // Dados necessarios: 
    // idRiot .OK
    // Icone do Jogador e o id do Icone .OK
    // Dados das ultimas 20 partidas:
    // Vitoria ou derrota (Boolean)
    // CS da partida
    // Dano por minuto
    // Objetivos feitos
    // Gold por minuto
    // Placar de visão
    // KDA
    // Duração de partida???
    const riotAccount = sessionStorage.RIOT_ACCOUNT;
    const riotId = sessionStorage.RIOT_TAG;
    const apiKey = 'RGAPI-4f82a092-1aeb-4365-b477-c15f961269f1';

    try {
      // Adquiri o nome e tag do usuario
      const contaResponse = await fetch(
        `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${riotAccount}/${riotId}?api_key=${apiKey}`
      );
      if (!contaResponse.ok) throw new Error("Conta não encontrada");
      const conta = await contaResponse.json();


      // Adquiri o puuid
      const summonerResponse = await fetch(
        `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${conta.puuid}?api_key=${apiKey}`
      );
      if (!summonerResponse.ok)
        throw new Error("Jogador não encontrado no LoL");
      const summoner = await summonerResponse.json();


      // Adquiri a versão da datadragon (API imgs) e insere o icone no card
      const iconResponse = await fetch(
        "https://ddragon.leagueoflegends.com/api/versions.json"
      );
      if (!iconResponse.ok)
        throw new Error("Versões não encontradas");
      const versions = await iconResponse.json();
      var iconUser = `https://ddragon.leagueoflegends.com/cdn/${versions[0]}/img/profileicon/${summoner.profileIconId}.png`
      const fundo = document.querySelector(".fundo");
      fundo.style.backgroundImage = `url("${iconUser}"), linear-gradient(135deg, #6a00ff, #d400ff, #ff0080)`;
      console.log(iconUser);



      // Adquiri o id das ultimas 20 partidas solo/duo
      const partidaResponse = await fetch(
        `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${conta.puuid}/ids?type=ranked&queue=420&count=20&api_key=${apiKey}`
      );
      if (!partidaResponse.ok)
        throw new Error("Nenhuma partida encontrada");
      const partida = await partidaResponse.json();

      // a posição [0] é sempre a mais recente
      var partida1 = partida[0];
      console.log(partida1)

      // Adquiri os dados das partidas
      const dadosResponse = await fetch(
        `https://americas.api.riotgames.com/lol/match/v5/matches/${partida1}?api_key=${apiKey}`
      );
      if (!dadosResponse.ok)
        throw new Error("Não foi possivel adquirir os dados das partidas");
      const dados = await dadosResponse.json();
      console.log(dados)

      // Variavel dos dados que serão usados




      resultado.innerHTML = `
        <p><strong>Nome:</strong> ${summoner.name ?? conta.gameName}</p>
        <p><strong>Icone:</strong> ${summoner.profileIconId}</p>
        <p><strong>Nível:</strong> ${summoner.summonerLevel}</p>
        <p><strong>PUUID:</strong> ${conta.puuid}</p>
        <p><strong>${partida.length}</strong></p>
        <p><strong>Resultado:</strong> ${dados.endOfGameResult}</p>
        ${dados.info.gameVersion}
        ${dados.info.participants[0].championName}
      `;
      resultado.style.color = "lightgreen";

    } catch (err) {
      resultado.textContent = "Erro: " + err.message;
      resultado.style.color = "red";
    }

}