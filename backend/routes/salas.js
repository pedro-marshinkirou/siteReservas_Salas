var express = require('express');
var router = express.Router();
var salaController = require('../controllers/salas.js');

router.get('/consultaNumero/', salaController.consultaSalasNumero);
router.get('/', salaController.getSalas);
router.post('/', salaController.createSala);
router.get('/:id', salaController.getoneSala);
router.put('/:id', salaController.updateSala);
router.delete('/:id', salaController.deleteSala);


module.exports = router;