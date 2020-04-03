import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '123', name: "Matthew", age: 34 },
      { id: '234', name: "Stephanie", age: 33 }
    ],
    animals: [
      { id: '345', name: "Pancake", age: 7 }
    ],
    showPersons: false,
    showAnimals: false
  }

  toggleCardsHandler = () => {
    const doesShowPersons = this.state.showPersons;
    const doesShowAnimals = this.state.showAnimals;
    this.setState(
      {
        showPersons: !doesShowPersons,
        showAnimals: !doesShowAnimals
      }
    );
  }  

  deletePersonHandler = (index) => {
    // prevent from manipulating original data by reference, by copying, copying is done with the spread operator here.
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  switchAnimalAgeHandler = (newAge) => {
    this.setState({
      animals: [
        { name: "Pancake", age: newAge }
      ]
    })
  }

  personAgeChangeHandler = (event, id) => {
    // find the index based on the id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // copy the value
    const person = {...this.state.persons[personIndex]};
    person.age = event.target.value;

    // copy the state and apply the value
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // apply the new state
    this.setState({
      persons: persons
    });
  }

  animalAgeChangeHandler = (event, id) => {
    const animalIndex = this.state.animals.findIndex(a => {
      return a.id === id;
    });

    const animal = {...this.state.animals[animalIndex]};
    animal.age = event.target.value;

    const animals = [...this.state.animals];
    animals[animalIndex] = animal;
    this.setState({
      animals: animals
    });
    
  }

  render() {
    const assignedClasses = []

    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 0) {
      assignedClasses.push(classes.bold);
    }



    let persons = null;
    let animals = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
              <Person click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                
                changed={(event) => this.personAgeChangeHandler(event, person.id)} />
                </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    if (this.state.showAnimals) {
      animals = (
        <div>
          {this.state.animals.map(animal => {
            return (
              <Person name={animal.name} age={animal.age} key={animal.id} changed={(event) => this.animalAgeChangeHandler(event, animal.id)} />
            );
          })}
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <h1 className={assignedClasses.join(' ')}>Hello, world!</h1>
        <button  className={btnClass} onClick={this.toggleCardsHandler}>Switch Person Age</button>
        {persons}
        {animals}
      </div>
    );
  }
}

export default App;
