import React from 'react';

const ValidationComponent = ({ textLength }) => {
  let textValidation = null;

  if (textLength < 5) {
    textValidation = 'Text too short';
  } else {
    textValidation = 'Text long enough';
  }

  return <p>{textValidation}</p>;
}

export default ValidationComponent;
