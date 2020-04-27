import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Animals from '../components/Animals/Animals';
import Cockpit from '../components/Cockpit/Cockpit';

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

  deleteAnimalHandler = (index) => {
    // prevent from manipulating original data by reference, by copyi ng, copying is done with the spread operator here.
    const animals = [...this.state.animals];
    // index is the index of the element being removed, 1 is the number of elements to remove
    animals.splice(index, 1);
    this.setState({ animals: animals });
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

    let persons = null;
    let animals = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.personAgeChangeHandler}/>
    }

    if (this.state.showAnimals) {
      animals = <Animals
            animals={this.state.animals}
            clicked={this.deleteAnimalHandler}
            changed={this.animalAgeChangeHandler}/>
    }

    return (
      <div className={classes.App}>
        <Cockpit
         showPersons={this.state.showPersons}
         persons={this.state.persons}
         clicked={this.toggleCardsHandler}
        />
        {persons}
        {animals}
      </div>
    );
  }
}

export default App;
