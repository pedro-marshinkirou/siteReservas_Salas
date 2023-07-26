var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET index. */ 
router.get('/', async (req, res, next) => {
  try {
    //const index = await db.findAll();
    res.render('index', { title: 'RESERVAS' });
  } catch (err) {
    next(err);
  }
})

/* GET new index. */ 
router.get('/index', async (req, res, next) => {
  try {
    //const index = await db.findAll();
    res.render('index', { title: 'RESERVAS' });
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

/* GET salas. */
router.get('/salas', async (req, res, next) => {
  try {
    const salas = await db.findAll('salas');
    res.render('salas', { title: 'Salas', salas });
  } catch (err) {
    next(err);
  }
})

/* GET ships. */
router.get('/gunships', async (req, res, next) => {
  try {
    const Gships = await db.findAll('gunships');
    res.render('gunships', { title: 'GUNSHIPS', Gships });
  } catch (err) {
    next(err);
  }
})

// POST funcionarios. */
router.post('/insfuncionarios', async (req, res, next) => {
  try {
    const funcionarios = await db.Insertdb('funcionarios', req.body);
    res.redirect('funcionarios');
  } catch (err) {
    next(err);
  }
})

// POST clientes. */
router.post('/insclientes', async (req, res, next) => {
  try {
    const clientes = await db.Insertdb('clientes', req.body);
    res.redirect('clientes');
  } catch (err) {
    next(err);
  }
})

// POST salas. */
router.post('/inssalas', async (req, res, next) => {
  try {
    const salas = await db.Insertdb('salas', req.body);
    res.redirect('salas');
  } catch (err) {
    next(err);
  }
})

//DEL clientes. */
router.get('/delclientes/delete/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await db.deleteDb('clientes',id);
    res.redirect('/clientes');
  } catch (err) {
    next(err);
  }
})

//DEL funcionarios. */
router.get('/delfuncionarios/delete/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await db.deleteDb('funcionarios',id);
    res.redirect('/funcionarios');
  } catch (err) {
    next(err);
  }
})

//DEL salas. */
router.get('/delsalas/delete/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await db.deleteDb('salas',id);
    res.redirect('/salas');
  } catch (err) {
    next(err);
  }
})

//EDT(GET) funcionarios. */
router.get('/edtfuncionarios/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const doc = await db.findOne('funcionarios',id);
    res.render('att', {title: 'EDIT', doc, action: '/edtfuncionarios/' + doc._id });
  } catch (err) {
    next(err);
  }
})

//EDT(render) funcionarios. */
router.get('/att', (req, res, next) => {
  res.render('att', { title: 'EDIT', doc: {"cpf":"","nome":"","cep":"","email":"","telefone":"","funcao":""}})
});

//EDT(post) funcionarios. */
router.post('/insedtfuncionarios/:id', async (req, res, next) => {
  const id = req.params.id;
  const cpf = req.body.cpf;
  const nome = req.body.nome;
  const cep = req.body.cep;
  const email = req.body.email;
  const telefone = req.body.telefone;
  const funcao = req.body.funcao;

  try{
  const result = await db.updateDb('funcionarios', id, { cpf, nome, cep, email, telefone, funcao});
  console.log(result);
  res.redirect('/funcionarios');
  } catch (err) {
    next(err);
  }
});


//EDT(GET) clientes. */
router.get('/edtclientes/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const doc = await db.findOne('clientes',id);
    res.render('attc', {title: 'EDIT', doc, action: '/edtclientes/' + doc._id });
  } catch (err) {
    next(err);
  }
})

//EDT(render) clientes. */
router.get('/attc', (req, res, next) => {
  res.render('attc', { title: 'EDIT', doc: {"cpf":"","nome":"","cep":"","email":""}})
});

//EDT(post) clientes. */
router.post('/insedtclientes/:id', async (req, res, next) => {
  const id = req.params.id;
  const cpf = Number(req.body.cpf);
  const nome = req.body.nome;
  const cepstring = (req.body.cep);
  const cep = Number(cepstring);
  const email = req.body.email;

  try{
  const result = await db.updateDbd('clientes', id, { cpf, nome, cep, email});
  console.log(result);
  res.redirect('/clientes');
  } catch (err) {
    next(err);
  }
});

//EDT(GET) salas. */
router.get('/edtsalas/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const doc = await db.findOne('salas',id);
    res.render('atts', {title: 'EDIT', doc, action: '/edtsalas/' + doc._id });
  } catch (err) {
    next(err);
  }
})

//EDT(render) salas. */
router.get('/atts', (req, res, next) => {
  res.render('atts', { title: 'EDIT', doc: {"imgsala":"","numero":"","capacidade":"","descricao":"","valor":""}})
});

//EDT(post) salas. */
router.post('/insedtsalas/:id', async (req, res, next) => {
  const id = req.params.id;
  const imgsala = req.body.imgsala;
  const numero = req.body.numero;
  const capacidade = req.body.capacidade;
  const descricao = req.body.descricao;
  const valor = req.body.valor;

  try{
  const result = await db.updateDbds('salas', id, { imgsala, numero, capacidade, descricao, valor});
  console.log(result);
  res.redirect('/salas');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
