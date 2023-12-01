const Produto = require('../Entidades/Produto.js');
const db = require('../Database.js');

module.exports = {

    async alterarProduto(request, response) {
        const produto = { ...request.body }
        const con = await db.conecta()
        let novo = new Produto(produto.id, null, null, produto.quantidade);
        await novo.alterar(db)
        return response.json(novo)
    },

    async deletarProduto(request, response) {
        const produto = { ...request.params };
        const con = await db.conecta();
        let novo = new Produto(produto.id, null, null, null);
        await novo.excluir(db);
        return response.json(novo)
    },

    async listarProduto(request, response) {
        const con = await db.conecta();
        let lista = [];
        let novo = new Produto(null, null, null, null);
        lista = await novo.listar(db);
        return response.json(lista);
    }
}