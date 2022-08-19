const { connection } = require("../../banco/banco.js");

// PADRÃO CRUD: Busca todos os itens cadastrados
exports.BuscaTodos = ( req, res ) => {

    const query = ` SELECT * FROM filmes ORDER BY id DESC ; `;
    connection.query( query,
        (err, results) => 
            results ? res.status(200).send(results) : res.status(400).send(err)
    );

}

// PADRÃO CRUD: Busca um item único através doseu ID
exports.Busca = ( req, res ) => {

    const id = req.params.id;

    const query = ` SELECT * FROM filmes WHERE id = ${id} `
    connection.query( query,
        (err, results) => 
            results ? res.status(200).send(results) : res.status(400).send(err)
    );

}  

// Essa função não está no padrão, ela é específica desse controlador
// Busca um filme pelo do título em qualquer parte da string
exports.BuscaPorTitulo = ( req, res ) => {

    const titulo = req.params.titulo;

    const query = ` SELECT * FROM filmes WHERE titulo LIKE "%${ titulo }%"; `
    connection.query( query,
        (err, results) => 
            results ? res.status(200).send(results) : res.status(400).send(err)
    );

}   