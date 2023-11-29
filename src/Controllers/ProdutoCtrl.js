const Produto = require('../Entidades/Produto.js');
const db = require('../Database.js');

module.exports = {

    async listarProduto(request, response) {
        const con = await db.conecta();
        let lista = [];
        let novo = new Produto(null, null, null, null);
        lista = await novo.listar(db);
        return response.json(lista);
    }
}