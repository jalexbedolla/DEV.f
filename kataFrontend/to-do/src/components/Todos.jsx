import React, { Component } from "react";

export default class Todos extends Component {
  // state con valores harcodeados or default values
  state = {
    addTodoValue: "",
    todos: [
      {
        id: 1,
        value: "todo 1",
        isDone: false,
      },
      {
        id: 2,
        value: "todo 2",
        isDone: true,
      },
      {
        id: 3,
        value: "todo 3",
        isDone: false,
      },
    ],
  };

  /* ahora viene esta mamada de las funciones */
  // esta funcion es para darle un id a cada tarea.
  getTime() {
    let d = new Date();
    var n = d.getTime();
    return n;
  }

  render() {
    return <div>Todos</div>;
  }
}
