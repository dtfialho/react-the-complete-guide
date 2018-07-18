import React from 'react';

import UserInput from '../UserInput/UserInput';
import './UserOutput.css';

const UserOutput = ({ name, index, change }) => {
  return (
    <div className="userOutput">
      <UserInput change={change} index={index} name={name} />
      <p>This is a paragraph!</p>
      <p>Hi {name}!</p>
    </div>
  );
};

export default UserOutput;
