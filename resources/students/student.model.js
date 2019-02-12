const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema ({

        firstName:{
            type:String,
            required:true,
        },
        lastName :{
            type:String,
            required:true,
        },
        email:{
            type:String
        },
        school:{
            type:String
        },
        phone:{
            type:Number
        },
        gender:{
            type:String
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
})

module.exports = mongoose.model('students',studentSchema)