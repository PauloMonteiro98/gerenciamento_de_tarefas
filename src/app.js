const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();

//// LER FORMATO JSON
app.use(bodyParser.json());

//// ROTAS DA API
const todoRoutes = require('./routes/todoRoutes');
app.use('/', todoRoutes);

//// SERVIDOR
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`);
});
