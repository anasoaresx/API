const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());

app.get("/search", async (req, res) => {
  const { query } = req.query;
  const API_KEY ="c4d2f9bda2ee98756cb82107e6b57a342ddc77d6b4249cc4d8378f1b9c90bdf4"
;
  try {
    const response = await axios.get("https://serpapi.com/search.json", {
      params: {
        q: query,
        engine: "google",
        google_domain: "google.com.br",
        api_key: API_KEY,
        hl: "pt-br",
        gl: "br",
        num: 10,
      },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar resultados" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy rodando na porta ${PORT}`);
});