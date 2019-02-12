const express = require('express')
const logger = require('morgan')
const connect = require('./utils/db')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')



const studentRoutes = require('./resources/students/student.route')
const app = express()
const port = 3000

app.use(errorhandler())
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('Welcome to main page')
})
app.use('/students',studentRoutes)



const start = async ()=>{

    try{
       await connect()
        app.listen(port,()=>{
            console.log(`lisening on  port ${port}`)
        })
    }
    catch(err) {
        console.error(err)
    }
}

start()

