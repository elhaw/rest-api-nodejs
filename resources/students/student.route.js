const {Router} = require('express')
const router = Router()
const port = 3000


router.route('/')
    .get((req,res)=>{
        res.send(`running server get student ${port}`)
    })
    .post((req,res)=>{
    res.send(`running server post student ${port}`)
    })

router.route('/studentId')
    .put((req,res)=>{
        res.send(`running server put student ${port}`)
    })
    .delete((req,res)=>{
    res.send(`running server delete student ${port}`)
    })

module.exports = router