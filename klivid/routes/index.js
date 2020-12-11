var express = require('express');
var router = express.Router();
const cadastroController = require('../controllers/cadastro-de-produto')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get ('/produto', cadastroController.index)

module.exports = router;
