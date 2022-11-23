import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "./Counter.css";
import InputValue from "../../Shared/InputValue";
import Button from "../../Shared/Button";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
      limiteInferior: 0,
      limiteSuperior: 0,
    };
    this.aumentarContador = this.aumentarContador.bind(this);
    this.disminuirContador = this.disminuirContador.bind(this);
    this.establecerLimiteInferior = this.establecerLimiteInferior.bind(this);
    this.establecerLimiteSuperior = this.establecerLimiteSuperior.bind(this);
  }

  /* functions */
  aumentarContador() {
    if (this.state.contador < this.state.limiteSuperior)
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

  establecerLimiteSuperior(nuevoLimite) {
    this.setState({ limiteSuperior: nuevoLimite });
  }
  render() {
    return (
      <div className="App App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Aplicacion de Contador</p>
        <p>{this.state.contador}</p>
        <p>{JSON.stringify(this.state)}</p>

        <InputValue
          title="Limite Inferior"
          placeholder="ingresa el limite inferior"
          setLimit={this.establecerLimiteInferior}
        />

        <InputValue
          title="Limite Superior"
          placeholder="ingresa limite superior"
          setLimit={this.establecerLimiteSuperior}
        />

        <Button
          handleClick={this.aumentarContador}
          lable="Up" /* color={true} */
        />
        <Button
          handleClick={this.disminuirContador}
          lable="Down" /* color={false} */
        />
        <button onClick={() => this.resetState()}>Reset</button>
      </div>
    );
  }
}
