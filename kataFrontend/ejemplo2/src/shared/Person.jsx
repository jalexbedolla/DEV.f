import React, { Component } from "react";

export default class Person extends Component {
  render() {
    return (
      <>
        <h3>{this.props.name}</h3>
      </>
    );
  }
}
