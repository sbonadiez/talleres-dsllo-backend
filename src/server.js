const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const taller1Routes = require('./routes/taller1.routes');
const taller2Routes = require('./routes/taller2.routes');
const taller3Routes = require('./routes/taller3.routes');

app.use('/api/taller1', taller1Routes);
app.use('/api/taller2', taller2Routes);
app.use('/api/taller3', taller3Routes);

app.get('/', (req, res) => res.json({ mensaje: 'API Talleres funcionando correctamente' }));

app.listen(PORT, () => console.log(`Servidor activo en http://localhost:${PORT}`));