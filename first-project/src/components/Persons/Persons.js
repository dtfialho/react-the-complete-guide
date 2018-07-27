import React from 'react';
import Person from './Person/Person';

const Persons = ({ persons, click, change }) => persons.map((person, index) => {
  return <Person
    click={() => click(index)}
    name={person.name}
    age={person.age}
    key={person.id}
    changed={(event) => change(event, person.id)} />
});

export default Persons;
