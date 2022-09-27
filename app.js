
const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('<h1 style= "color: red">Agora está funcionando a rota "/"</h1>');
});

app.get('/outraRota', function(req, res){
    res.send('Esta é outra rota')
})

// O listen sempre deve ficar no final do arquivo.
app.listen(3000, function () {
    console.log('Servidor rodando no endereço http://localhost:3000');
});