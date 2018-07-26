import mongoose from 'mongoose'

const Schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    title: String,
    nationality: String,
    src: String,
    alt: String,
    skills: [],
    whySofterDeveloper: String,
    longTermVision: String,
    motivatesMe: String,
    favoriteQuote: String,
    joinedOn: String
})

export default mongoose.model('Student', Schema)
