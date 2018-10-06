import mongoose from 'mongoose';

const Schema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  title: String,
  nationality: {
    type: String,
    required: true
  },
  src: String,
  alt: String,
  skills: {
    type: [],
    required: true
  },
  whySofterDeveloper: String,
  longTermVision: String,
  motivatesMe: String,
  favoriteQuote: String,
  joinedOn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Student', Schema);
