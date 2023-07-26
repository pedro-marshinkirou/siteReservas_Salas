var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET teste. */ 
router.get('/teste', async (req, res, next) => {
  try {    
    res.render('teste', { title: 'teste'});
  } catch (err) {
    next(err);
  }
})

/* GET index. */ 
router.get('/', async (req, res, next) => {
  try {    
    res.render('index', { title: 'Index'});
  } catch (err) {
    next(err);
  }
})

/* GET funcionarios. */ 
router.get('/funcionarios', async (req, res, next) => {
  try {
    const funcionarios = await db.findAll('funcionarios');
    res.render('funcionarios', { title: 'Funcionarios', funcionarios });
  } catch (err) {
    next(err);
  }
})

/* GET clientes. */ 
router.get('/clientes', async (req, res, next) => {
  try {
    const clientes = await db.findAll('clientes');
    res.render('clientes', { title: 'Clientes', clientes });
  } catch (err) {
    next(err);
  }
})

// POST clientes. */
router.post('/clientes', async (req, res, next) => {
  try {

      const resultado = await db.insertDb('clientes',req.body);
      res.redirect('/clientes');
      
  } catch (err) { 
    next(err);
   }
})

// DEL clientes. */
router.get('/clientes/delete/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await db.deleteDb('clientes',id);
    res.redirect('/clientes');
  } catch (err) {
    next(err);
  }
})

module.exports = router;
