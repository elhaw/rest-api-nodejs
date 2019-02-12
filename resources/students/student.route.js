const {Router} = require('express')
const studentContrller = require('./student.controller')
const router = Router()
const port = 3000


router.route('/')
    .get((req,res)=>{
        res.send(`running server get student ${port}`)
    })
    .post(studentContrller)

router.route('/studentId')
    .put((req,res)=>{
        res.send(`running server put student ${port}`)
    })
    .delete((req,res)=>{
    res.send(`running server delete student ${port}`)
    })

module.exports = router