import Student from '../models';
import cloudinary from 'cloudinary';
import keys from '../config/keys';

export const getStudents = (req, res) => {
  Student.find()
    .sort({ joinedOn: -1 })
    .sort({ firstName: 1 })
    .then(students => {
      res.json({
        success: true,
        message: 'Students fetched successfully',
        students
      });
    })
    .catch(() => {
      return res.json({
        success: false,
        message: 'some error'
      });
    });
};

const { api_key, api_secret } = keys;
cloudinary.config({ cloud_name: 'qq', api_key, api_secret });

export const addStudent = (req, res) => {
  let { id, firstName, skills } = req.body;
  const regex = /[,(\s)?]/;
  skills = skills.split(regex).filter(skill => skill.length);
  const addFunc = url => {
    const new_student = new Student({
      ...req.body,
      skills,
      alt: firstName,
      src: url
    });
    new_student.save((err, student) => {
      if (err) {
        return res.json(500).json({
          success: false,
          error: err
        });
      }
      return res.json({
        success: true,
        student
      });
    });
  };
  if (req.file) {
    cloudinary.uploader
      .upload_stream(
        result => {
          addFunc(result.secure_url);
        },
        { public_id: firstName }
      )
      .end(req.file.buffer);
  } else {
    addFunc('');
  }
};

export const updateStudent = (req, res) => {
  let { id, firstName, skills } = req.body;
  const regex = /[,(\s)?]/;
  skills = skills.split(regex).filter(skill => skill.length);
  const updateFunc = url => {
    Student.findByIdAndUpdate(
      id,
      {
        ...req.body,
        src: url,
        alt: firstName,
        skills
      },
      { new: true },
      (err, student) => {
        if (err) {
          return res.json(500).json({
            success: false,
            error: err
          });
        }
        return res.json({
          success: true,
          student
        });
      }
    );
  };
  if (req.file) {
    cloudinary.uploader
      .upload_stream(
        result => {
          updateFunc(result.secure_url);
        },
        { public_id: firstName }
      )
      .end(req.file.buffer);
  } else {
    Student.findById(id, (err, student) => {
      if (err) {
        return res.json(404).json({
          success: false,
          error: err
        });
      }
      updateFunc(student.src);
    });
  }
};

export const getStudent = (req, res) => {
  Student.find({ _id: req.params.id }).exec((err, student) => {
    if (err) {
      return res.json({
        success: false,
        message: 'some error'
      });
    }
    if (student.length) {
      return res.json({
        success: true,
        message: 'student fetched by id seccessfully',
        student
      });
    } else {
      return res.json({
        success: false,
        message: 'student not found',
        student
      });
    }
  });
};

export const deleteStudent = (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, student) => {
    if (err) {
      return res.json({
        success: false,
        message: 'some error'
      });
    }
    return res.json({
      success: true
    });
  });
};
