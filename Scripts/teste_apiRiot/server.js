import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors()); // permite o acesso do seu HTML
app.use(express.json());

const PORT = 3000;

// Rota para buscar jogador
app.get("/summoner/:name", async (req, res) => {
  const summonerName = req.params.name;
  const apiKey = process.env.RIOT_API_KEY; // segura no .env
  const region = "br1";

  try {
    const response = await fetch(
      `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(
        summonerName
      )}?api_key=${apiKey}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Jogador não encontrado" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor" });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
