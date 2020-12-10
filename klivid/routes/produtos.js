const express = require('express');
const router = express.Router();
const { Product } = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Product
        .findAll()
        .then(produtos => {
            res.render('produtos/index', { produtos });
        })
});

module.exports = router;
