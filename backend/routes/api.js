var express = require('express');
var router = express.Router();
var db = require('../db');

//API ROUTES??


//(GETONE) salas. */
router.get('/fndsalas/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    res.send(await db.findOne('salas',id));
  } catch (err) {
    next(err);
  }
})

// GET salas(thunderclient). */
router.get('/salas', async (req, res, next) => {
  try {
    const rer = await db.findAll('salas');
    res.send(JSON.stringify(rer));
  } catch (err) {
    next(err);
  }
})

//(GETONE) clientes. */
router.get('/fndclientes/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      res.send(await db.findOne('clientes',id));
    } catch (err) {
      next(err);
    }
  })

//(GETONE) funcionarios. */
router.get('/fndfuncionarios/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      res.send(await db.findOne('funcionarios',id));
    } catch (err) {
      next(err);
    }
  })

// GET funcionarios(thunderclient). */
router.get('/funcionarios', async (req, res, next) => {
    try {
      const rer = await db.findAll('funcionarios');
      res.send(JSON.stringify(rer));
    } catch (err) {
      next(err);
    }
  })
  
  // GET clientes(thunderclient). */
  router.get('/clientes', async (req, res, next) => {
    try {
      const rer = await db.findAll('clientes')
      res.send(JSON.stringify(rer));
    } catch (err) {
      next(err);
    }
  })
  
  // POST funcionarios(thunderclient). */
  router.post('/instfuncionarios', async (req, res, next) => {
    try {
      res.send(await db.Insertdb('funcionarios', req.body));
    } catch (err) {
      next(err);
    }
  })
  
  // POST clientes(thunderclient). */
  router.post('/instclientes', async (req, res, next) => {
    try {
      res.send(await db.Insertdb('clientes', req.body)); 
    } catch (err) {
      next(err);
    }
  })

  // POST funcionarios(thunderclient). */
  router.post('/instsalas', async (req, res, next) => {
    try {
      res.send(await db.Insertdb('salas', req.body)); 
    } catch (err) {
      next(err);
    }
  })
  
  //DEL clientes. */
  router.delete('/deltclientes/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      res.send(await db.deleteDb('clientes',id));
    } catch (err) {
      next(err);
    }
  })
  
  //DEL funcionarios. */
  router.delete('/deltfuncionarios/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      res.send(await db.deleteDb('funcionarios',id));
    } catch (err) {
      next(err);
    }
  })

  //DEL salas. */
  router.delete('/deltsalas/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      res.send(await db.deleteDb('salas',id));
    } catch (err) {
      next(err);
    }
  })
  
  //UPDT clientes. */
  router.put('/updtclientes/:id', async (req, res, next) => {
    const id = req.params.id;
    const cpf = req.body.cpf;
    const nome = req.body.nome;
    const cep = req.body.cep;
    const email = req.body.email;
  
    try{
    res.send(await db.updateDbd('clientes', id, { cpf, nome, cep, email}));
    } catch (err) {
      next(err);
    }
  });
  
  //UPDT funcionarios. */
  router.put('/updtfuncionarios/:id', async (req, res, next) => {
    const id = req.params.id;
    const cpf = req.body.cpf;
    const nome = req.body.nome;
    const cep = req.body.cep;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const funcao = req.body.funcao;
  
    try{
    res.send(await db.updateDb('funcionarios', id, { cpf, nome, cep, email, telefone, funcao}));
    } catch (err) {
      next(err);
    }
  });


  //UPDT funcionarios. */
  router.put('/updtsalas/:id', async (req, res, next) => {
    const id = req.params.id;
    const imgsala = req.body.imgsala;
    const numero = req.body.numero;
    const capacidade = req.body.capacidade;
    const descricao = req.body.descricao;
    const valor = req.body.valor;
  
    try{
    res.send(await db.updateDb('salas', id, { imgsala, numero, capacidade, descricao, valor}));
    } catch (err) {
      next(err);
    }
  });

module.exports = router;