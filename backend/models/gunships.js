const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const gunship = new Schema ({

    nome        : { type:String, required: true},
    ano         : { type:Number, required: true},
    estaleiro   : { type:String, required: true}
})

const GunshipModel = mongoose.model('gunships', gunship);


module.exports = {GunshipModel}