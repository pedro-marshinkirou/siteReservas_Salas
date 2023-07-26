var express = require('express');
var router = express.Router();
var funcController = require('../controllers/funcionarios.js');

router.get('/', funcController.getFuncs);
router.post('/', funcController.createFunc);
router.get('/:id', funcController.getoneFunc);
router.put('/:id', funcController.updateFunc);
router.delete('/:id', funcController.deleteFunc);
router.get('/consultaCPFnome/:id', funcController.consultaFuncionarioCPFnome);


module.exports = router;