module.exports = class AcertoDAO {

    async listar(db) {
        const sql = "SELECT * FROM acerto"
        const result = await db.consulta(sql, null);
        return result;
    }

    async gravar(acerto, db) {
        let sql = "INSERT INTO acerto (quantidade, tipo, motivo, data, id_produto) VALUES (?, ?, ?, ?, ?)"
        const valores = [acerto.getQuantidade(), acerto.getTipo(), acerto.getMotivo(), acerto.getData(), acerto.getIdProduto()]
        const result = await db.manipula(sql, valores)
        return result;
    }

}