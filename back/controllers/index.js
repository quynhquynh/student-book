import Student from '../models'

export const getStudents = (req, res) => {
    Student.find({}).exec()
        .then(students => {
            res.json({
                'success': true,
                'message': 'Students fetched successfully',
                students
            })
        })
        .catch(() => {
            return res.json({
                'success': false,
                'message': 'some error'
            })
        })
}

export const addStudent = (req, res) => {
    const new_student = new Student(req.body)
    new_student.save((err, student) => {
        if(err){
            return res.json({
                'success': false,
                'message': 'some error'
            })
        }
        return res.json({
            'success': true,
            'message': 'Student added successfully',
            student
        })
    })
}

export const updateStudent = (req, res) => {
    Student.findByIdAndUpdate(req.body.id, req.body, {new: true}, (err, student) => {
        if(err){
            return res.json({
                'success': false,
                'message': 'some error',
                'error': err
            })
        }
        return res.json({
            'success': true,
            'message': 'Updated successfully',
            student
        })
    })
}

export const getStudent = (req, res) => {
    Student.find({_id: req.params.id}).exec((err, student) => {
        if(err){
            return res.json({
                'success': false,
                'message': 'some error'
            })
        }
        if(student.length){
            return res.json({
                'success': true,
                'message': 'student fetched by id seccessfully',
                student
            })
        }else{
            return res.json({
                'success': false,
                'message': 'student not found',
                student
            })
        }
    })
}

export const deleteStudent = (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, student) => {
        if(err){
            return res.json({
                'success': false,
                'message': 'some error'
            })
        }
        return res.json({
            'success': true,
            'message': student.fullName + 'deleted'
        })
    })
}