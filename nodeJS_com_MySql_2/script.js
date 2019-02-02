var express = require('express');
var app = express();
var mysql = require('mysql');


var connection = mysql.createPool({
    connectionLimit: 50,
    host:'localhost',
    user:'root',
    password:'programador',
    database:'testePython'
});
/*
connection.connect(function(error){
    if(!!error){
        console.log('Deu erro ao Conectar!!');
    }else{
        console.log('Conectou!');
    }
});
*/
/*
app.get('/',function(req,resp){
    connection.query("SELECT * FROM animals", function(error, rows, fields){
        if(!!error){
            console.log('Erro Na Pesquisa!!');
        }else{
            console.log('Consulta realizada com Sucesso!!');
            console.log(rows[0]['name']);
            resp.send('Hello '+rows[0]['name']);
        }
    });
});
*/
app.get('/',function(req,resp){
    connection.getConnection(function(error, tempCont){
        if(!!error){
            tempCont.release();
            console.log('Error!!');
        }else{
            console.log('Connected!!');
            tempCont.query("SELECT * FROM animals", function(error, rows, fields){
                tempCont.release();
                if(!!error){
                    console.log('Error na consulta!!');
                }else{
                    resp.json(rows);
                }
            })
        }
    });
})


app.listen(1337);


console.log("Tudo ok!!");
console.log("Escutando na posta "+1337);