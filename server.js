const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());



app.use('/api/whatsup', require('./routes/whatsappRoutes'));
// Démarrer le serveur
const PORT = process.env.API_PORT || 3000;
app.listen(PORT, () => console.log(`Serveur API en écoute sur le port ${PORT}`));
