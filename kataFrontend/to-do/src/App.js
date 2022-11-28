import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>To-Do App in React js</h1>
        <Todos />
      </div>
    );
  }
}
