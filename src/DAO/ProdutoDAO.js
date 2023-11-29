module.exports = class ProdutoDAO {

    async listar(db) {
        const sql = "SELECT * FROM produto"
        const result = await db.consulta(sql, null);
        return result;
    }

}