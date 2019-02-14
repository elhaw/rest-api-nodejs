const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const adminSchema = new Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }

})


module.exports = mongoose.model('admin',adminSchema)