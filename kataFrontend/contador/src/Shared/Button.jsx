import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <Button
        onClick={this.props.handleClick}
        style={{ backgroundColor: this.props.color ? "red" : "blue" }}
      >
        {this.props.label}
      </Button>
    );
  }
}
