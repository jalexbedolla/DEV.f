import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
    this.aumentarContador = this.aumentarContador.bind(this);
    this.disminuirContador = this.disminuirContador.bind(this);
  }

  /* functions */
  aumentarContador() {
    if (this.state.contador < 15)
      this.setState({ contador: this.state.contador + 1 });
  }
  disminuirContador() {
    if (this.state.contador > 0)
      this.setState({ contador: this.state.contador - 1 });
  }
  resetState() {
    this.setState({ contador: 0 });
  }
  render() {
    return (
      <div className="App App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.contador}</p>
        <button onClick={this.aumentarContador}>Up</button>
        <button onClick={this.disminuirContador}>Down</button>
        <button onClick={() => this.resetState()}>Reset</button>
      </div>
    );
  }
}
