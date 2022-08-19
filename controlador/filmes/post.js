const { connection } = require("../../banco/banco.js");

// PADRÃO CRUD: insere um item no banco
exports.Insere = ( req, res ) => {

    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;

    const query = ` INSERT INTO filmes ( titulo, sinopse ) VALUES ( "${titulo}" , "${sinopse}"  ); `;
    connection.query( query,
        (err, results) => 
            results ? res.status(200).send(results) : res.status(400).send(err)
    );

}