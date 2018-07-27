import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from 'morgan'
import mongoose from 'mongoose'
import multer from 'multer'
import cloudinary from 'cloudinary'
import data from './public/data'
import Students from './models'
import * as studentController from './controllers'
import { config } from './config'
import { uploadNewStudent, uploadCurrentStudent } from './controllers/upload'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser: true})

const folder = __dirname + '/public/images/'

Students.remove({}, err => {
    if(err) console.log(err)
    console.log('removed all')
})

import data2 from './public/data2'
data2.forEach(student => {
    let { firstName, lastName, title, nationality, src, alt, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn } = student
    let stu = new Students({ firstName, lastName, title, nationality, src, alt, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn })
    stu.save((err, i) => {
        if(err) console.log(err)
    })
})


// 'use strict';
// var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// cloudinary.config(_extends({}, config));
const { cloud_name, api_key, api_secret } = config
cloudinary.config({cloud_name, api_key, api_secret})

// data.forEach(student => {
//     let { firstName, lastName, title, nationality, src, alt, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn } = student
//     cloudinary.v2.uploader.upload(folder + student.src, {public_id: student.firstName.toLowerCase()}, (err, res) => {
//         let stu = new Students({
//             firstName, 
//             lastName,
//             title,
//             nationality,
//             src: res.secure_url,
//             alt,
//             skills,
//             whySofterDeveloper,
//             longTermVision,
//             motivatesMe,
//             favoriteQuote,
//             joinedOn
//         })
//         stu.save((err, i) => {
//             if(err) console.log(err)
//         })
//     })
// })

app.get('/', (req, res) => {
    return res.send('Api working')
})

const storage = multer.memoryStorage()
const upload = multer({ storage })

app.post('/files', upload.single('src'), uploadNewStudent)

app.post('/file', upload.single('src'), uploadCurrentStudent)

app.get('/students', studentController.getStudents)
    .post('/students', studentController.addStudent)
    .put('/students', studentController.updateStudent)

app.get('/students/:id', studentController.getStudent)
    .delete('/students/:id', studentController.deleteStudent)


const port = process.env.port || 3001
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})