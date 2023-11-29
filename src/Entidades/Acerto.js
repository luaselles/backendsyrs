const AcertoDAO = require('../DAO/AcertoDAO')
class Acerto {

    constructor(quantidade, tipo, motivo, data, id, id_produto) {
        this.quantidade = quantidade;
        this.tipo = tipo;
        this.motivo = motivo;
        this.data = data;
        this.id = id;
        this.id_produto = id_produto;
    }

    getId() {
        return this.id;
    }
    setId(novoId) {
        this.id = novoId;
    }

    getIdProduto() {
        return this.id_produto;
    }
    setIdProduto(novoIdProduto) {
        this.id_produto = novoIdProduto;
    }

    getQuantidade() {
        return this.quantidade;
    }
    setQuantidade(novoQuantidade) {
        this.quantidade = novoQuantidade;
    }

    getTipo() {
        return this.tipo;
    }
    setTipo(novoTipo) {
        this.tipo = novoTipo;
    }

    getMotivo() {
        return this.motivo;
    }
    setMotivo(novoMotivo) {
        this.motivo = novoMotivo;
    }

    getData() {
        return this.data;
    }
    setData(novoData) {
        this.data = novoData;
    }

    async gravar(db) {
        const resp = await new AcertoDAO().gravar(this, db);
        this.id = resp.lastId;
    }

    async listar(db) {
        const result = await new AcertoDAO().listar(db);
        let lista = [];
        for (let i = 0; i < result.data.length; i++) {
            lista.push(new Acerto(result.data[i].quantidade, result.data[i].tipo, result.data[i].motivo, result.data[i].data, result.data[i].id, result.data[i].id_produto,));
        }
        return lista;
    }

}
module.exports = Acerto;