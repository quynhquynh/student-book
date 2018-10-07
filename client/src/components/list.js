import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ src, _id, firstName, lastName }) => (
  <Link to={`/students/${_id}`}>
    <li className={src ? '' : 'no-img'}>
      {src ? (
        <img src={src} alt="" width="200" height="230" />
      ) : (
        <img alt="" width="200" height="230" />
      )}
      <p>
        {firstName} {lastName}
      </p>
    </li>
  </Link>
);

export default List;
