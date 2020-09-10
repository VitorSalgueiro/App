//npm install express
//npm install nodemon
//atualizar o packge.json 
//abaixo da linha test, dentro do methodo Script acresentar o comando abaixo
//"Methodos" : "nodemon Methodos/app.js"
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;
const hostname = "192.168.100.65";

{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//imprime no console qual a porta e qual o server que esta rodando a aplicação
app.listen(port, hostname,()=>{
    console.log(`Servidor rodando na porta ${port} em ${hostname}`);
});