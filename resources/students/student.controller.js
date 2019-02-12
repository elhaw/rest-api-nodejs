const StudentModel = require('./student.model')


module.exports = (req,res)=>{

    let newStudent = new StudentModel(req.body)
    newStudent.save((err,student)=>{
        if(err) {
            console.log(err)
        }
        res.json(student)
    })
}  