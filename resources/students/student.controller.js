const StudentModel = require('./student.model')


const addStudent = (req, res) => {

    const newStudent = new StudentModel(req.body);
    
    newStudent.save((err, student) => {
        if (err) {
            console.log(err)
        }
        res.json(student);
    })
}
const getStudents = (req, res) => {

    StudentModel.find({}, (err, students) => {
        if (err) {
            console.error(err);
        }

        return res.json(students);
    })
}

const getStudentsById = (req, res) => {
    let studentId = req.params.studentId
    StudentModel.findById(studentId, (err, students) => {
        if (err) {
            console.error(err);
        }

        return res.json(students);
    })
}


const updateById = (req, res) => {
    let studentId = req.params.studentId
    StudentModel.findByIdAndUpdate({
        _id: studentId
    }, req.body, (err, student) => {
        if (err) {
            console.error(err)
        }
        return res.json(student)
    })
}
const deleteContact = async (req, res) => {

    try {
        let studentId = req.params.studentId
        await StudentModel.findByIdAndRemove({
            _id: studentId
        })
        return res.json('Student is deleted')

    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentsById,
    updateById,
    deleteContact
}