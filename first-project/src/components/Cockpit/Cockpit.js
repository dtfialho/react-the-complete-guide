import React, { Fragment } from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if ( props.persons.length <= 2 ) {
    assignedClasses.push( classes.red ); // classes = ['red']
  }
  if ( props.persons.length <= 1 ) {
    assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
  }

  return (
    <Fragment>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join( ' ' )}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.click}>Toggle Persons</button>
    </Fragment>
  );
};

export default Cockpit;
