const StudentModel = require('./student.model')


const addStudent = (req,res)=>{

    let newStudent = new StudentModel(req.body)
    newStudent.save((err,student)=>{
        if(err) {
            console.log(err)
        }
        res.json(student)
    })
}
const getStudents = (req,res)=>{

    StudentModel.find({},(err,students)=>{
        if(err){
            console.error(err)
        }

        return res.json(students)
    })
}

module.exports = {
    addStudent,
    getStudents
}
