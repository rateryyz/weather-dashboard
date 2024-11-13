const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erro ao buscar dados de clima');
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
