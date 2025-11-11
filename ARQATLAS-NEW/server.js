// server.js
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/validar", async (req, res) => {
  const { codigo } = req.body;

  try {
    const response = await fetch(
      "https://www.unicollege.net/cerrado/io03/Validador.aspx",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          ctl00$ContentPlaceHolder1$DS_CODVALIDA: codigo,
          ctl00$ContentPlaceHolder1$BT_CONTINUAR: "Continuar",
        }),
      }
    );

    const text = await response.text();
    res.send(text);
  } catch (err) {
    res.status(500).send("Erro ao validar diploma");
  }
});

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
