module.exports = class ProdutoDAO {

    async alterar(produto, db) {
        let sql = "UPDATE produto SET quantidade = ? WHERE id = ?";
        const valores = [produto.getQuantidade(), produto.getId()];
        const result = await db.manipula(sql, valores);
        return result;
    }

    async listar(db) {
        const sql = "SELECT * FROM produto"
        const result = await db.consulta(sql, null);
        return result;
    }

}