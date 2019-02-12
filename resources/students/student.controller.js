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

const getStudentsById = (req,res)=>{
    let studentId = req.params.studentId
    StudentModel.findById(studentId,(err,students)=>{
        if(err){
            console.error(err)
        }

        return res.json(students)
    })
}


const updateById = (req,res)=>{
    let studentId = req.params.studentId
    StudentModel.findByIdAndUpdate({_id:studentId},req.body,(err,student)=>{
        if(err){
            console.error(err)
        }
       return res.json(student)
    })
}
const deleteContact = (req,res)=>{
    let studentId = req.params.studentId
    StudentModel.findByIdAndRemove({_id:studentId},(err,student)=>{
        if(err){
            console.error(err)
        }
       return res.json('Student is deleted')
    })
}

module.exports = {
    addStudent,
    getStudents,
    getStudentsById,
    updateById,
    deleteContact
}
