import React from 'react';
import ChunkShow from './chunk-show';

const SingleStudent = ({
  skills,
  firstName,
  lastName,
  title,
  nationality,
  src,
  whySofterDeveloper,
  longTermVision,
  motivatesMe,
  favoriteQuote,
  joinedOn
}) => {
  const arr = [
    { part: 'Full name: ', value: `${firstName} ${lastName}` },
    { part: 'Title: ', value: title },
    { part: 'Nationality: ', value: nationality },
    { part: 'Skills: ', value: skills },
    { part: 'Why Software Developer: ', value: whySofterDeveloper },
    { part: 'Long-term vision: ', value: longTermVision },
    { part: 'Motivate Me: ', value: motivatesMe },
    { part: 'Favorite quote: ', value: favoriteQuote },
    {
      part: 'Joined on: ',
      value: joinedOn !== undefined && joinedOn.substr(0, 10)
    }
  ];
  return (
    <div id="student">
      <img src={src} alt={firstName} width="300" height="350" />
      <div id="side-panel">
        {arr.map(a => (
          <ChunkShow key={a.part} {...a} />
        ))}
      </div>
    </div>
  );
};

export default SingleStudent;
