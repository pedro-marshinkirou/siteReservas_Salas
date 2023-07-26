const reserva = require('../models/reservas.js');

// apenas para testes
exports.getReservas = async(req, res) => {
  try {
      const reservas = await reserva.reservaModel.find();
      res.json(reservas)
  }catch(error) {
      res.status(500).json({ message: error.message });

  }
}

exports.consultaDatasReservas = async (req, res) => {   
  const { inicio, fim } = req.query;

  // Verifica se os parâmetros estão presentes
  if (!inicio || !fim) {
    res.status(400).json({ message: 'Parâmetros inválidos' });
  } else {
    // Converte as datas para objetos Date
    const inicioData = new Date(inicio);
    const fimData = new Date(fim);

    // Verifica se as datas são válidas
    if (isNaN(inicioData.getTime()) || isNaN(fimData.getTime())) {
      res.status(400).json({ message: 'Datas inválidas' });
    } else if (fimData < inicioData) {
      res.status(400).json({ message: 'A data final deve ser posterior à data inicial' });
    } else {
      // Executa a consulta no banco de dados
      const response = await reserva.reservaModel.find({ data: { $gte: inicioData, $lte: fimData } }, (err, resultados) => {
        if (err) {
          console.error(err);
        } else {
          console.log(resultados);
        }
      });
      
      res.send(response.data);
    }
  }
};

/*exports.consultaSalasReservas = async (req, res) => {   
  const sala_reserva = req.query;

  // Verifica se os parâmetros estão presentes
  if (!sala) {
    res.status(400).json({ message: 'Parâmetro inválido' });
  } else {
    
      // Executa a consulta no banco de dados
      const response = await reserva.reservaModel.find({ sala: sala_reserva }, (err, resultados) => {
        if (err) {
          console.error(err);
        } else {
          console.log(resultados);
        }
      });
      
      res.send(response.data);
    }
  };
*/

exports.consultaSalasReservas = async (req, res) => {   
  const sala_numero = req.body.sala;

  // Verifica se os parâmetros estão presentes
  if (!sala_numero) {
    res.status(400).json({ message: 'Parâmetro inválido' });
  } else {

      // Executa a consulta no banco de dados      
      //const sala_numero = new String(sala_reserva);
      console.log('sala param ' + + sala_numero);
      try {
        res.status(201).json(await reserva.reservaModel.find({ sala: sala_numero }));
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  };

exports.getOneReserva = async (req, res) => {   
  try {
    res.status(201).json(await reserva.reservaModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createReserva = async (req, res) => {   
    try {
      res.status(201).json(await reserva.reservaModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

exports.updateReserva = async (req, res) => {   
    try {;
      res.status(201).json(await reserva.reservaModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

exports.cancelaReserva = async (req, res) => {   
    try {;
      res.status(201).json(await reserva.reservaModel.findByIdAndUpdate(req.params.id, { status: 'C' } ));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
/*
exports.disponivelReserva = async (req, res) => {   
    try {;
      res.status(201).json(await reserva.reservaModel.findByIdAndUpdate(req.params.id, { status: 'C' } ));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
*/