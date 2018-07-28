import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from 'morgan'
import mongoose from 'mongoose'
import studentRoutes from './routes'
import initializeDb from './initDb'


const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser: true})

initializeDb()

app.use('/', studentRoutes)

const port = process.env.port || 3001
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})