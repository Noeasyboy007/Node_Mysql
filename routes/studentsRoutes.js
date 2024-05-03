const express = require('express');
const { getStudentList } = require('../controller/studentController');

//router object
const router = express.router();

//routes

//GET all student list
router.get('/list',getStudentList)

module.exports = router();