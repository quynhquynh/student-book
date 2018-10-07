import express from 'express';
import multer from 'multer';
import * as studentController from '../controllers';

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

router
  .get('/api/students', studentController.getStudents)
  .post('/api/students', upload.single('src'), studentController.addStudent)
  .put('/api/students', upload.single('src'), studentController.updateStudent);

router
  .get('/api/students/:id', studentController.getStudent)
  .delete('/api/students/:id', studentController.deleteStudent);

export default router;
