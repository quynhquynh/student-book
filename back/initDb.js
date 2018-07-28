import data from './public/data'
import cloudinary from 'cloudinary'
import Students from './models'
import { config } from './config'

const folder = __dirname + '/public/images/'
const { cloud_name, api_key, api_secret } = config
cloudinary.config({cloud_name, api_key, api_secret})

const initializeDb = () => {
    Students.remove({}, err => {
        if(err) console.log(err)
        console.log('removed all')
    })
    data.forEach(student => {
        let { firstName, lastName, title, nationality, src, alt, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn } = student
        cloudinary.v2.uploader.upload(folder + student.src, {public_id: student.firstName.toLowerCase()}, (err, res) => {
            let stu = new Students({
                firstName, 
                lastName,
                title,
                nationality,
                src: res.secure_url,
                alt,
                skills,
                whySofterDeveloper,
                longTermVision,
                motivatesMe,
                favoriteQuote,
                joinedOn
            })
            stu.save((err, i) => {
                if(err) console.log(err)
            })
        })
    })
}



export default initializeDb