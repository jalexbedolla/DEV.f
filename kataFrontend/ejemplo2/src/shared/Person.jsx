import React, { Component } from "react";

export default class Person extends Component {
  render() {
    return (
      <li className="d-flex justify-content-evenly mb-2">
        <h3>{`${this.props.name} ${this.props.lastname}`}</h3>
        <button className="btn btn-outline-primary">Hello..!</button>
      </li>
    );
  }
}
