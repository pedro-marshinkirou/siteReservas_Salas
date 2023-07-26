var express = require('express');
var router = express.Router();
var reservaController = require('../controllers/reservas.js');

//consultar reservas teste
router.get('/', reservaController.getReservas);
//consultar reservas em um perido
router.get('/consultaSalas/', reservaController.consultaSalasReservas);
// criar a reserva
router.post('/', reservaController.createReserva);
//consultar reservas com id
router.get('/unica/:id', reservaController.getOneReserva);
// alterar sala ou periodo da reserva
router.put('/:id', reservaController.updateReserva);
// ver disponibilidade de sala e data para reserva
//router.get('/disponivel/:id', reservaController.disponivelReserva);
// cancelar a reserva
router.put('/cancelar/:id', reservaController.cancelaReserva);


module.exports = router;