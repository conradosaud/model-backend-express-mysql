const rotas = require("express").Router();

/*
    Este arquivo de rotas definem quais serão as rotas principais
    que o sistema vai direcionar. Dessa forma não é necessário
    repetir o nome da rota inicial.
*/

rotas.use("/filmes", require("./rotasFilmes.js") );
rotas.use("/usuarios", require("./rotasUsuarios.js") );

module.exports = rotas;