import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'
import { render } from 'react-dom';

class App extends Component {
  state = {
      persons: [
        {name: "Matthew", age: 34},
        {name: "Stephanie", age: 33}
      ],
      animals: [
        {name: "Pancake", age: 7}
      ]
  }

  switchPersonAgeHandler = () => {
    this.setState({persons: [
      {name: "Matthew", age: 34},
      {name: "Stephanie", age: 34}
    ]})
  }

  switchAnimalAgeHandler = (newAge) => {
    this.setState({
      animals: [
        {name: "Pancake", age: newAge}
      ]})
  }

  ageChangeHandler = (event) => {
    this.setState({
      animals: [
        {name: "Pancake", age: event.target.value}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'lightgreen',
      font: 'inherit',
      border: '1px solid lightgreen',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <button onClick={this.switchPersonAgeHandler}>Switch Person Age</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <button 
          style={style}
          onClick={this.switchAnimalAgeHandler.bind(this, 8)}>Switch Age</button>
        <Person 
          name={this.state.animals[0].name} 
          age={this.state.animals[0].age}
          click={this.switchAnimalAgeHandler.bind(this, 9)}
          changed={this.ageChangeHandler}><ul><li>Hobbies: scratching people</li></ul></Person>
      </div>
    );
  }  
}

export default App;
