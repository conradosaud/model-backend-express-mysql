const { connection } = require("../../banco/banco.js");

// PADRÃO CRUD: altera um item do banco.
// É preciso ter o ID do item que será alterado
exports.Altera = ( req, res ) => {

    // O ID vem através de um parâmetro
    const id = req.params.id;

    // Os demais valores vem através do body
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;

    const query = ` UPDATE filmes SET titulo = "${titulo}", sinopse = "${sinopse}" WHERE id = ${id} ; `;
    connection.query( query,
        (err, results) => 
            results ? res.status(200).send(results) : res.status(400).send(err)
    );

}