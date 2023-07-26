const ship = require('../models/gunships.js');

exports.getShips = async(req, res) => {
    try {
        const ships = await  ship.GunshipModel.find();
        res.json(ships)
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneShip = async (req, res) => {   
  try {;
    res.status(201).json(await ship.GunshipModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createShip = async (req, res) => {   
    try {;
      const ships = await ship.GunshipModel.create(req.body);
      res.redirect('gunships');
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateShip = async (req, res) => {   
    try {;
      res.status(201).json(await ship.GunshipModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteShip = async (req, res) => {
    const id = req.params.id;   
    try {;
      res.status(201).json(await ship.GunshipModel.findByIdAndDelete(id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.consultaShipnome = async (req, res) => {   
    const ship_nome = req.params.id;
    console.log(typeof ship_nome,);
    console.log(ship_nome);
    
    // Verifica se os parâmetros estão presentes
    if (!ship_nome) {
      res.status(400).json({ message: 'Parâmetro inválido' });
    } else {
      // Executa a consulta no banco de dados      
      //const sala_numero = new String(sala_reserva);
      console.log(typeof ship_nome);
      console.log('sala param ' + + ship_nome);
      try {
        res.status(201).json(await ship.GunshipModel.find({ nome: ship_nome }));
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  };