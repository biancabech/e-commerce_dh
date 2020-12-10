const express = require('express');
const router = express.Router();
const { Category } = require('../models');

router.get('/', function(req, res, next) {
    Category
        .findAll()
        .then(categorias => {
            res.render('categorias/index', { categorias });
        })
});

router.get('/novo', function(req, res, next) {
    res.render('categorias/novo');
});

router.post('/novo', function(req, res, next) {
    const descricao = req.body.descricao;
    Category.create({ description: descricao });
    res.redirect('/categorias');
});

router.get('/editar/:id', function(req, res, next) {
    const id = req.params.id;

    Category
        .findByPk(id)
        .then(categoria => {
            res.render('categorias/editar', { categoria });
        })
        .catch(() => { 
            throw new Exception('Categoria não encontrada');
        })
});

router.post('/editar/:id', function(req, res, next) {
    const id = req.params.id;
    const descricao = req.body.descricao;
    Category
        .findByPk(id)
        .then(categoria => {
            categoria.description = descricao;
            categoria.save();

            res.redirect('/categorias');
        })
});

module.exports = router;
