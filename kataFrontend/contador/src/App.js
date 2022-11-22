import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
      limiteInferior: 0,
      limiteSuperior: 12,
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
    if (this.state.contador > this.state.limiteInferior)
      this.setState({ contador: this.state.contador - 1 });
  }
  resetState() {
    this.setState({ contador: 0 });
  }

  establecerLimiteInferior(nuevoLimite) {
    this.setState({ limiteInferior: nuevoLimite });
  }
  render() {
    return (
      <div className="App App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Aplicacion de Contador</p>
        <p>{this.state.contador}</p>
        <p>{JSON.stringify(this.state)}</p>
        <label>Limite Inferior</label>
        <input
          onChange={(e) => this.establecerLimiteInferior(e.target.value)}
          placeholder="ingresa el limite inferior"
        />
        <button onClick={this.aumentarContador}>Up</button>
        <button onClick={this.disminuirContador}>Down</button>
        <button onClick={() => this.resetState()}>Reset</button>
      </div>
    );
  }
}
