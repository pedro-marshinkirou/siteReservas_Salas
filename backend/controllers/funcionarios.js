const func = require('../models/funcionarios.js')

exports.getFuncs = async(req, res) => {
    try {
        const funcs = await func.FuncioModel.find();
        res.json(funcs)
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneFunc = async (req, res) => {   
  try {;
    res.status(201).json(await func.FuncioModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createFunc = async (req, res) => {   
    try {;
      res.status(201).json(await func.FuncioModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateFunc = async (req, res) => {   
    try {;
      res.status(201).json(await func.FuncioModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteFunc = async (req, res) => {   
    try {;
      res.status(201).json(await func.FuncioModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.consultaFuncionarioCPFnome = async (req, res) => {   
    const cpf_nome = req.params.id;
    
    // Verifica se os parâmetros estão presentes
    if (!cpf_nome) {
      res.status(400).json({ message: 'Parâmetro inválido' });
    } else {
      // Executa a consulta no banco de dados      
      //const sala_numero = new String(sala_reserva);
      console.log(typeof cpf_nome);
      console.log('sala param ' + + cpf_nome);
      try {
        res.status(201).json(await func.FuncioModel.find({ nome: cpf_nome }));
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  };
