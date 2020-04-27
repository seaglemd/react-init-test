import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 1) {
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 0) {
      assignedClasses.push(classes.bold);

    }
    return (
        <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(' ')}>Hello, world!</h1>
            <button  className={btnClass} onClick={props.clicked}>Switch Person or Animal Age</button>
        </div>
    );
}

export default cockpit;