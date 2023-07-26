var express = require('express');
var router = express.Router();
var shipController = require('../controllers/gunships.js');

router.get('/gunships', shipController.getShips);
router.post('/ISHIP/', shipController.createShip);
router.get('/:id', shipController.getoneShip);
router.put('/USHIP/:id', shipController.updateShip);
router.get('/DSHIP/:id', shipController.deleteShip);
router.get('/consultaNavio/:id', shipController.consultaShipnome);

module.exports = router;