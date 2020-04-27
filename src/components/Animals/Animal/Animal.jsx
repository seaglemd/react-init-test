import React from 'react';
import classes from './Animal.css';

const animal = (props) => {
    return (
        <div className={classes.Animal}>
            <p onClick={props.click}>
                I'm {props.name} and I am {props.age}.
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.age}/>
        </div>
    );
}

export default animal;