import React from 'react';

const styles = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black'
};

const CharComponent = ({ letter, click }) => {
  return <div onClick={click} style={styles}>{letter}</div>
};

export default CharComponent;
