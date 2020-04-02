import React from 'react';
import StyledDiv from '../Styles/StyledDiv';

const person = (props) => {

    return (
        <StyledDiv>
            <p onClick={props.click}>
                I'm {props.name} and I am {props.age}.
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.age}/>
        </StyledDiv>
    );
}

export default person;