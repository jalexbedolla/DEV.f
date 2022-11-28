import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./shared/Person";

export default class App extends Component {
  state = {
    people: [
      { id: 1, name: "Alex", lastname: "ls1" },
      { id: 2, name: "Fer", lastname: "ls2" },
      { id: 3, name: "Vale", lastname: "ls3" },
      { id: 4, name: "Carlos", lastname: "ls4" },
      { id: 5, name: "keni", lastname: "ls5" },
    ],
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="d-flex flex-column justify-evenly">
            {this.state.people.map((person) => (
              <Person
                id={person.id}
                name={person.name}
                lastname={person.lastname}
              />
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
