import cloudinary from 'cloudinary';
import axios from 'axios';
import keys from '../config/keys';

const { api_key, api_secret } = keys;
cloudinary.config({ cloud_name: 'qq', api_key, api_secret });

export const uploadNewStudent = (req, res) => {
  let {
    firstName,
    lastName,
    title,
    nationality,
    skills,
    whySofterDeveloper,
    longTermVision,
    motivatesMe,
    favoriteQuote,
    joinedOn
  } = req.body;
  const regex = /[,(\s)?]/;
  skills = skills.split(regex).filter(skill => skill.length);
  if (req.file) {
    cloudinary.uploader
      .upload_stream(
        result => {
          axios
            .post(`${req.headers.origin}students`, {
              src: result.secure_url,
              firstName,
              lastName,
              title,
              nationality,
              alt: firstName,
              skills,
              whySofterDeveloper,
              longTermVision,
              motivatesMe,
              favoriteQuote,
              joinedOn
            })
            .then(() => {
              res.status(200).json({
                success: true,
                src: result.secure_url,
                joinedOn
              });
            })
            .catch(e => {
              res.status(500).json(e.response.data);
            });
        },
        { public_id: req.body.firstName }
      )
      .end(req.file.buffer);
  } else {
    axios
      .post(`${req.headers.origin}students`, {
        firstName,
        lastName,
        title,
        nationality,
        alt: firstName,
        src: '',
        skills,
        whySofterDeveloper,
        longTermVision,
        motivatesMe,
        favoriteQuote,
        joinedOn
      })
      .then(() => {
        res.status(200).json({
          success: true,
          src: '',
          joinedOn
        });
      })
      .catch(e => {
        res.status(500).json(e.response.data);
      });
  }
};

export const uploadCurrentStudent = (req, res) => {
  let {
    id,
    firstName,
    lastName,
    title,
    nationality,
    skills,
    whySofterDeveloper,
    longTermVision,
    motivatesMe,
    favoriteQuote,
    joinedOn
  } = req.body;
  const regex = /[,(\s)?]/;
  skills = skills.split(regex).filter(skill => skill.length);
  if (req.file) {
    cloudinary.uploader
      .upload_stream(
        result => {
          axios
            .put(`${req.headers.origin}students`, {
              src: result.secure_url,
              id,
              firstName,
              lastName,
              title,
              nationality,
              alt: firstName,
              skills,
              whySofterDeveloper,
              longTermVision,
              motivatesMe,
              favoriteQuote,
              joinedOn
            })
            .then(() => {
              res.status(200).json({
                success: true,
                src: result.secure_url,
                id,
                firstName,
                lastName,
                title,
                nationality,
                alt: firstName,
                skills,
                whySofterDeveloper,
                longTermVision,
                motivatesMe,
                favoriteQuote,
                joinedOn
              });
            })
            .catch(e => {
              res.status(500).json(e.response.data);
            });
        },
        { public_id: req.body.firstName }
      )
      .end(req.file.buffer);
  } else {
    axios
      .put(`${req.headers.origin}students`, {
        id,
        firstName,
        lastName,
        title,
        nationality,
        alt: firstName,
        skills,
        whySofterDeveloper,
        longTermVision,
        motivatesMe,
        favoriteQuote,
        joinedOn
      })
      .then(data => {
        console.log('data', data.src);
        res.status(200).json({
          success: true,
          src: data.src,
          id,
          firstName,
          lastName,
          title,
          nationality,
          alt: firstName,
          skills,
          whySofterDeveloper,
          longTermVision,
          motivatesMe,
          favoriteQuote,
          joinedOn
        });
      })
      .catch(e => {
        res.status(500).json(e.response.data);
      });
  }
};
