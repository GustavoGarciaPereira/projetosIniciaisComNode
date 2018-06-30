var express = require('express');  //declarando o modulo express
var app = express();               //inicializo o modulo na variavel app 

app.use('/',express.static(__dirname + '/public'));

app.listen(3000,function(){
    console.log('executando na porta 3000');
});