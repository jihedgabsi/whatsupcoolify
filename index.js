const express = require('express');
const app = express();

const whatsup = require("./router/whatsappRoutes");



app.use("/whatsapp", whatsup);

app.listen(3000, () => {
  console.log('Serveur Express lancé sur http://localhost:3000');
});
