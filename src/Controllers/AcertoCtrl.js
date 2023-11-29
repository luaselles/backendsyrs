const Acerto = require('../Entidades/Acerto.js');
const db = require('../Database.js');

module.exports = {

    async gravarAcerto(request, response) {
        const acerto = { ...request.body };
        const con = await db.conecta();
        let novo = new Acerto(acerto.quantidade, acerto.tipo, acerto.motivo, acerto.data, acerto.id, acerto.id_produto);
        await novo.gravar(db);
        return response.json(novo);
    },

    async listarAcerto(request, response) {
        const con = await db.conecta();
        let lista = [];
        let novo = new Acerto(null, null, null, null, null, null);
        lista = await novo.listar(db);
        return response.json(lista);
    }
}