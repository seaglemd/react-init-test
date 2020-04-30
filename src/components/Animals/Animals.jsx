import React from 'react';

import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Animal from './Animal/Animal';

const animals = (props) => props.animals.map((animal, index) => {
    return ( <ErrorBoundary key={animal.id}>
        <Animal click={() => props.clicked(index)}
          name={animal.name}
          age={animal.age}
          key={animal.id}
          changed={(event) => props.changed(event, animal.id)} />
       </ErrorBoundary>
    )});

  export default animals;