const clit = require('../models/clientes.js')

exports.getClits = async(req, res) => {
    try {
        const clints = await clit.ClienteModel.find();
        res.json(clints)
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneClit = async (req, res) => {   
  try {
    res.status(201).json(await clit.ClienteModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createClit = async (req, res) => {   
    try {
      res.status(201).json(await clit.ClienteModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateClit = async (req, res) => {   
    try {
      res.status(201).json(await clit.ClienteModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteClit = async (req, res) => {   
    try {
      res.status(201).json(await clit.ClienteModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.consultaClienteCPF = async (req, res) => {   
    const cpf_cliente = req.params.id;
    
    // Verifica se os parâmetros estão presentes
    if (!cpf_cliente) {
      res.status(400).json({ message: 'Parâmetro inválido' });
    } else {
      // Executa a consulta no banco de dados      
      //const sala_numero = new String(sala_reserva);
      console.log(typeof cpf_cliente);
      console.log('sala param ' + + cpf_cliente);
      try {
        res.status(201).json(await clit.ClienteModel.find({ cpf: cpf_cliente }));
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  };