import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

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
        </header>
      </div>
    );
  }
}
