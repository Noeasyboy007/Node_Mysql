const express = require('express');

const { getStudentList, getStudentById, updateStudent, createStudentList, deleteStudent } = require('../controller/studentController');

//router object
const router = express.Router();

//routes

//CREATE STUDENT LIST
router.post('/create',createStudentList)

//GET all student list
router.get('/get-all-list',getStudentList)

//GET student by id
router.get('/get-by-id/:id',getStudentById)


//UPDATE STUDENT LIST
router.put('/update/:id',updateStudent)

//DELETE STUDENT LIST
router.delete('/delete/:id',deleteStudent)


module.exports = router;