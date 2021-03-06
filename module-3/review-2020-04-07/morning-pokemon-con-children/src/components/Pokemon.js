import React from 'react';

const Pokemon = (props) => {
  const htmlCode = props.types.map((type, index) => {
    return (
      <li key={index} className="badge ml-1">
        {type}
      </li>
    );
  });

  return (
    <li className="card">
      <img src={props.url} alt="" className="card__img" />
      <h2 className="card__title">{props.name}</h2>
      <ul>{htmlCode}</ul>
    </li>
  );
};

export default Pokemon;
