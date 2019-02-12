const {Router} = require('express')
const {deleteContact,updateById,addStudent,getStudents,getStudentsById} = require('./student.controller')
const router = Router()
const port = 3000


router.route('/')
    .get(getStudents)
    .post(addStudent)

router.route('/:studentId')
    .get(getStudentsById)
    .put(updateById)
    .delete(deleteContact)

module.exports = router