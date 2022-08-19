// CONEXÃO DO EXPRESS
const express = require('express');
const app = express()
const port = 3001

// Leia arquivos JSON
app.use(express.json());

// CORS - proteção de dados e conexões
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Conexão com o banco de dados
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "senha_do_banco",
  database: "nome_do_banco"
});

/* ######### ROTAS DO EXPRESS ######### */

// ### Rotas de FILMES

// Busca todos os filmes
app.get("/filmes", ( req, res ) => {

    const query = ` SELECT * FROM filmes ORDER BY id DESC ; `;
    connection.query( query, (err, results) => {
        if( results ){
            res.send(results)
        }else{
            res.send( err )
        }
    });

});

// Busca os filmes através do título
app.get("/filmes/busca_titulo/:titulo", ( req, res ) => {

    const titulo = req.params.titulo;

    const query = ` SELECT * FROM filmes WHERE titulo LIKE "%${titulo}%" ; `;
    connection.query( query, (err, results) => {
        if( results ){
            res.send(results)
        }else{
            res.send( err )
        }
    });

});

// Insere um filme no banco
app.post("/filmes", ( req, res ) => {

    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;

    const query = ` INSERT INTO filmes ( titulo, sinopse ) VALUES ( "${titulo}" , "${sinopse}"  ); `;
    connection.query( query, (err, results) => {
        if( results ){
            res.send(results)
        }else{
            res.send( err )
        }
    });

});

// Insere um filme do banco através do ID informado
app.delete("/filmes/:id", ( req, res ) => {

    const id = req.parmas.id;

    const query = ` DELETE FROM filmes WHERE id = ${id}; `;
    connection.query( query, (err, results) => {
        if( results ){
            res.send(results)
        }else{
            res.send( err )
        }
    });

});

// ### Rotas de USUÁRIOS

// Insere um usuário no banco
app.post("/usuarios", ( req, res ) => {

    const usuario = req.body.usuario;
    const nome = req.body.nome;
    const senha = req.body.senha;

    const query = ` INSERT INTO usuarios ( usuario, nome, senha ) VALUES ( "${usuario}", "${nome}" , "${senha}"  ); `;
    connection.query( query, (err, results) => {
        if( results ){
            res.send(results)
        }else{
            res.send( err )
        }
    });

});

// Autentica o usuário no banco
app.post("/usuarios/autentica", ( req, res ) => {

    const usuario = req.body.usuario;
    const senha = req.body.senha;

    const query = ` SELECT id, nome FROM usuarios WHERE usuario = "${usuario}" AND senha = "${senha}" ; `
    connection.query( query, (err, results) => {
        if( results ){
            res.send(results)
        }else{
            res.send( err )
        }
    });

});


// Inicia a aplicão
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})