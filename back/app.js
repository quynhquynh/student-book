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

const MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://quynhquynh:quynh248@ds159121.mlab.com:59121/heroku_lzmwr7gz'
mongoose.connect(MONGOLAB_URI, {useNewUrlParser: true})

initializeDb()

app.use('/', studentRoutes)

const port = process.env.port || 3001
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`app listening on port ${port}`)
})