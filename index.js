const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const jwt = require('jsonwebtoken')


const studentRoutes = require('./resources/students/student.route')
const app = express()
const port = 3000

app.use(errorhandler())
app.use(logger('dev'))

app.get('/',(req,res)=>{
    res.send('Welcome to main page')
})
app.use('/students',studentRoutes)




app.listen(port,()=>{
    console.log(`lisening on  port ${port}`)
})