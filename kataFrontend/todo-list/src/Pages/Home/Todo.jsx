/* eslint-disable no-unused-vars */
import { list } from "postcss";
import React, { Component } from "react";

import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    /* arrancamos con el constructor */
    super(props); /* despues el super, que no me acuerdo para que es..!! */
    /* y este es el famoso estado */
    this.state = {
      nuevaTarea: "",
      lista: [],
    };
  }

  /* ahora vienen las malditas funciones */
  agregarTarea() {
    /* esta es para el boton 'add', create item with unique id */
    const nuevaTarea = {
      id: 1 + Math.random(),
      value: this.state.nuevaTarea.slice(),
    };
    /* copiar la tarea del input */
    const lista = [...this.state.lista];
    /* agregar la tarea a la lista */
    list.push(nuevaTarea);
    /* actualizar el stado con la nueva tarea y limpiar el input */
    this.setState({
      lista,
      nuevaTarea: "",
    });
  }

  actualizarTarea(key, value) {
    /* actualizar el estado */
    this.setState({
      [key]: value,
    });
  }
  render() {
    return (
      <div className="text-center mt-10">
        <header>
          <h1 className="text-3xl text-sky-500">To-do List</h1>
        </header>
        <div className="flex justify-center items-center gap-2 mt-7">
          <input
            className="w-72 rounded-md px-3 py-3 bg-[#e8ecf4] backdrop-blur-lg"
            type="text"
            onChange={(e) => this.actualizaTarea("nuevaTarea", e.target.value)}
            placeholder="Agregar Tarea"
          />
          <button
            className="h-full px-3 py-3 bg-orange-500 text-white font-medium rounded-md"
            onClick={() => this.agregarTarea()}
          >
            add
          </button>
        </div>
        <div>
          <ul>{}</ul>
        </div>
      </div>
    );
  }
}
