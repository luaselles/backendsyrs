const ProdutoDAO = require('../DAO/ProdutoDAO')
class Produto {

    constructor(id, nome, descricao, quantidade) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade = quantidade;
    }

    getId() {
        return this.id;
    }
    setId(novoId) {
        this.id = novoId;
    }

    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }

    getDescricao() {
        return this.descricao;
    }
    setDescricao(novoDescricao) {
        this.descricao = novoDescricao;
    }

    getQuantidade() {
        return this.quantidade;
    }
    setQuantidade(novoQuantidade) {
        this.quantidade = novoQuantidade;
    }

    async listar(db) {
        const result = await new ProdutoDAO().listar(db);
        let lista = [];
        for (let i = 0; i < result.data.length; i++) {
            lista.push(new Produto(result.data[i].id, result.data[i].nome, result.data[i].descricao, result.data[i].quantidade));
        }
        return lista;
    }

}
module.exports = Produto;