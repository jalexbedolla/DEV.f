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
      newItem: "" /* uno donde se recive la informacion.. el 'input' */,
      list: [] /* y el otro donde se pinta la informacion recibida del input 'e.target.value' */,
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
      <div className="h-100 w-full flex items-center justify-center font-sans  bg-gray-100">
        <div className="rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg bg-white">
          <div className="mb-4">
            <h1 className="text-center text-3xl text-sky-500">To-do List</h1>
            <div className="flex items-center justify-center mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                type="text"
                placeholder="Type a Task here..."
                value={this.state.newItem}
                onChange={(e) => this.updateInput("newItem", e.target.value)}
              />
              <button
                className="flex-no-shrink p-2 border-2 border-orange-500 rounded bg-orange-500 text-white hover:text-sky-500 "
                onClick={() => this.addItem()}
              >
                add
              </button>
            </div>
          </div>
          <div className="rounded shadow p-6 w-full lg:w-3/4 lg:max-w-3/4 bg-white">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    {item.value}

                    <button
                      className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      DONE
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
