var express = require('express');
var router = express.Router();
var clitController = require('../controllers/clientes.js');

router.get('/', clitController.getClits);
router.post('/', clitController.createClit);
router.get('/:id', clitController.getoneClit);
router.put('/:id', clitController.updateClit);
router.delete('/:id', clitController.deleteClit);
router.get('/consultaCPF/:id', clitController.consultaClienteCPF);


module.exports = router;