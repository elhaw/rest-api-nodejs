const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema ({

        firstName:{
            type:String,
            required:true,
        },
        secondName :{
            type:String,
            required:true,
        }


})

module.exports = mongoose.model('collectionName',studentSchema)