import cloudinary from 'cloudinary'
import axios from 'axios'

export const uploadNewStudent =  (req, res) => {
    let {firstName, lastName, title, src, nationality, alt, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn} = req.body
    const regex = /[,(\s)?]/
    skills = skills.split(regex).filter(skill => skill.length)
    if(req.file){
        cloudinary.uploader.upload_stream(result => {
            axios.post(`${req.headers.origin}students`, {src: result.secure_url,
                firstName, lastName, title, nationality, alt: firstName, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn 
            })
                .then(response => {
                    console.log('successful')
                    res.status(200).json({
                        success: true,
                        src: result.secure_url,
                        joinedOn
                    })
                })
                .catch(e => {
                    console.log('error', e.response)
                    res.status(500).json(error.response.data)
                })
        }, {public_id: req.body.firstName}).end(req.file.buffer)
    }else{
        axios.post(`${req.headers.origin}students`, {firstName, lastName, title, nationality, alt: firstName, src: '', skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn})
            .then(response => {
                console.log('successful without image')
                res.status(200).json({
                    success: true,
                    src: '',
                    joinedOn
                })
            })
            .catch(e => {
                console.log('error', e.response)
                res.status(500).json(error.response.data)
            })
    }
}


export const uploadCurrentStudent = (req, res) => {
    let {id, firstName, lastName, title, src, nationality, alt, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn} = req.body
    const regex = /[,(\s)?]/
    skills = skills.split(regex).filter(skill => skill.length)
    if(req.file){
        cloudinary.uploader.upload_stream(result => {
            axios.put(`${req.headers.origin}students`, {src: result.secure_url,
                id, firstName, lastName, title, nationality, alt: firstName, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn 
            })
                .then(response => {
                    console.log('updated successful')
                    res.status(200).json({
                        success: true,
                        src: result.secure_url,
                        id, firstName, lastName, title, nationality, alt: firstName, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn
                    })
                })
                .catch(e => {
                    console.log('error', e.response)
                    res.status(500).json(error.response.data)
                })
        }, {public_id: req.body.firstName}).end(req.file.buffer)
    }else{
        console.log('move to put')
        axios.put(`${req.headers.origin}students`, {id, firstName, lastName, title, nationality, alt: firstName, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn})
            .then(response => {
                console.log('updated successful without image')
                res.status(200).json({
                    success: true,
                    src: '',
                    id, firstName, lastName, title, nationality, alt: firstName, skills, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn
                })
            })
            .catch(e => {
                console.log('error', e.response)
                res.status(500).json(error.response.data)
            })
    }
}