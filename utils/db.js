const mongoose = require('mongoose')
const config = require('../config/dev')


module.exports = ((url = config.dbUrl)=>{
    return  mongoose.connect(url,{ useNewUrlParser: true })
})