import express from 'express'
import multer from 'multer'
import * as studentController from '../controllers'
import { uploadNewStudent, uploadCurrentStudent } from '../controllers/upload'

const router = express.Router()

router.get('/', (req, res) => {
    return res.send('Api working')
})

const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post('/files', upload.single('src'), uploadNewStudent)

router.post('/file', upload.single('src'), uploadCurrentStudent)

router.get('/students', studentController.getStudents)
    .post('/students', studentController.addStudent)
    .put('/students', studentController.updateStudent)

router.get('/students/:id', studentController.getStudent)
    .delete('/students/:id', studentController.deleteStudent)


export default router
