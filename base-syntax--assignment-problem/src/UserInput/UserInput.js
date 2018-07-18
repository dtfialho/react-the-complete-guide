import React from 'react';

const UserInput = ({ change, name, index }) => {
  const changeFunction = (e) => change(e.target.value, index);

  return <input type="text" onChange={changeFunction} value={name} />;
};

export default UserInput;
