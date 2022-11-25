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
      newItem: "",
      list: [],
    };
  }

  /* ahora vienen las malditas funciones */
  updateInput(key, value) {
    /* actualizar el estado de React */
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    /* esto es para agregarle un id para poder borrarlo */
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    /* tomar una copia de la lista de tareas */
    const list = [...this.state.list];

    /* agregar la tarea a la lista */
    list.push(newItem);

    /* actualizar el estado con la nueva tarea y limpiar el input */
    this.setState({
      list,
      newItem: "",
    });
  }
  /* funcion eliminar */
  deleteItem(id) {
    /* una copia de los articulos de la lista */
    const list = [...this.state.list];
    /* filtrar las tareas para ser borrada */
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
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
            placeholder="Type a Task here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button
            className="h-full px-3 py-3 bg-orange-500 text-white font-medium rounded-md"
            onClick={() => this.addItem()}
          >
            add
          </button>
        </div>
        <div>
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}

                  <button
                    className="h-full px-3 py-1 bg-red-500 text-white font-medium rounded-md"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
