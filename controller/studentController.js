//get all student list

const mysqlPool = require("../connection/db");

const getStudentList = async (req, res) => {
    try {
        const data = await mysqlPool.query('SELECT * FROM student')

        if (!data) {
            return res.status(404).send({
                success: false,
                message: 'No record found'
            })
        }

        res.status(200).send({
            success: true,
            message: 'Get Student List',
            totalStudents: data[0].length,
            data: data[0],
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            sucess: true,
            message: 'Eror in get all student List',
            error
        })
    }
}


//GET all student List By ID
const getStudentById = async (req, res) => {
    try {

        const studentId = req.params.id
        if (!studentId) {
            return res.status(404).send({
                success: false,
                message: 'No record found'
            })
        }

        // const data = await mysqlPool.query(`SELECT * FROM student_db.student WHERE id = `+studentId)
        const data = await mysqlPool.query(`SELECT * FROM student WHERE id =? `, [studentId])
        if (!data) {
            return res.status(404).send({
                success: false,
                message: 'No record found'
            })
        }

        res.status(200).send({
            success: true,
            message: 'Get Student Details By ID',
            studentDetails: data[0]

        })

    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            sucess: false,
            message: 'Eror in get students list by ID',
            error
        })
    }
}


//CREATE STUDENT LIST 
const createStudentList = async (req, res) => {

    try {
        const { name, roll_no, medium, fees } = req.body

        if (!name || !roll_no || !medium || !fees) {
            return res.status(500).send({
                success: false,
                message: 'Please provide all the fields'
            })
        }


        const data = await mysqlPool.query(`INSERT INTO student(name,roll_no,medium,fees) VALUES(?,?,?,?)`, [name, roll_no, medium, fees]);
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Error in create Data.",
            })
        }

        res.status(200).send({
            success: true,
            message: 'New Student Record created successfully.',
            // insertedId: data.insertId
        })
    }


    catch (error) {
        console.log(error);
        return res.status(500).send({
            sucess: false,
            message: 'Eror in create student list',
            error
        })
    }
}


//UPDATE student List By ID
const updateStudent = async (req, res) => {
    try {
        const studenyId = req.params.id
        if (!studenyId) {
            return res.status(404).send({
                success: false,
                message: 'Invcalid ID provide Valid id'
            })
        }

        const { name, roll_no, fees, medium } = req.body
        const data = await mysqlPool.query(`UPDATE student_db.student SET name=?,roll_no=?,fees=?,medium=? WHERE id=?`, [name, roll_no, fees, medium, studenyId])
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Error in update Data"
            })
        }

        res.status(200).send({
            success: true,
            message: 'Updated Student Details By ID',
            studentDetails: data[0]
        })
    }

    catch (error) {
        console.log(error);
        return res.status(500).send({
            sucess: false,
            message: 'Eror in update student list by ID',
            error
        })
    }
}


//Delete student
const deleteStudent = async (req, res) => {
    try {
        const deleteStudent = req.params.id
        if (!deleteStudent) {
            return res.status(404).send({
                success: false,
                message: 'Invalid ID Please provide Valid ID'
            })
        }

        const data = await mysqlPool.query(`DELETE FROM student WHERE id=?`, [deleteStudent])
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Error in delete Data"
            })
        }

        res.status(200).send({
            success: true,
            message: 'Deleted Student Details By ID',
            studentDetails: data[0]
        })
    }

    catch (error) {
        console.log(error);
        return res.status(500).send({
            sucess: false,
            message: 'Eror in delete student list by ID',
            error
        })
    }
}

module.exports = {
    getStudentList,
    getStudentById,
    updateStudent,
    createStudentList,
    deleteStudent
}