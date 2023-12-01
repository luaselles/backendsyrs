const { Router } = require('express');
const routes = Router();

const ProdutoCtrl = require('./Controllers/ProdutoCtrl');
const AcertoCtrl = require('./Controllers/AcertoCtrl');

routes.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

routes.get('/produto', ProdutoCtrl.listarProduto);
routes.delete('/produto/:id', ProdutoCtrl.deletarProduto);
routes.put('/produto', ProdutoCtrl.alterarProduto);

routes.get('/acerto', AcertoCtrl.listarAcerto);
routes.post('/acerto', AcertoCtrl.gravarAcerto);

module.exports = routes;
