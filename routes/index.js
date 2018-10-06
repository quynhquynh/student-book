import express from 'express';
import multer from 'multer';
import * as studentController from '../controllers';
import { uploadNewStudent, uploadCurrentStudent } from '../controllers/upload';

const router = express.Router();

router.get('/', (req, res) => {
  return res.send('Api working');
});

const fileFilter = (req, file, cb) => {
  const regex = /\.(jpg|jpeg|png|gif)$/gi;
  if (!file.originalname.match(regex)) {
    return cb(new Error('Only image files allowed'), false);
  }
  cb(null, true);
};

const storage = multer.memoryStorage();
const upload = multer({ storage, fileFilter });

router.post('/files', upload.single('src'), uploadNewStudent);

router.post('/file', upload.single('src'), uploadCurrentStudent);

router
  .get('/students', studentController.getStudents)
  .post('/students', upload.single('src'), studentController.addStudent)
  .put('/students', upload.single('src'), studentController.updateStudent);

router
  .get('/students/:id', studentController.getStudent)
  .delete('/students/:id', studentController.deleteStudent);

export default router;
