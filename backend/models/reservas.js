const mongoose = require('mongoose');
//const AutoIncrement  = require('mongoose-sequence')(mongoose);

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const reserva = new Schema ({

    numero          : { type:Number, unique:true},
    sala            : { type:String, required:true},
    funcionario     : { type:String, required:true},
    cliente         : { type:String, required:true},
    nomeFuncionario : { type:String, },
    cpf             : { type:Number, },
    data            : { type:Date,   required:true},                
    inicio          : { type:Number, required:true},
    fim             : { type:Number, required:true},    
    valortotal      : { type:Number, },    
    observacao      : { type:String, required:true},
    status          : { type:String, required:true}    
})

/*// Adiciona o campo de auto incremento ao esquema
reserva.plugin(AutoIncrement , { inc_field: 'numero' });

reserva.getNovoNumero = async function () {    
    return await this.nextCount;
}
*/
const reservaModel = mongoose.model('reservas', reserva);


module.exports = {reservaModel}