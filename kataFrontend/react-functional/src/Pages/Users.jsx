import React, { useState, useEffect } from "react"; // no olvidar poner los hook a usar
import { placeholderApi } from "../Api/placeholderApi";

export const Users = ({ company }) => {
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    const res = await placeholderApi.get("/users");
    setUsers(res.data);
    console.log("me volvi a crear");
  };

  // esta es la funciont que se ejecuta "cuando nuestro componente se monta por primera vez en la UI"
  useEffect(() => {
    //aqui escribimos nuestro callBack
    console.log("hola..me monte en la pantalla :)");
    getUserData();
    return () => {
      console.log("adios");
    };
    // y aqui nuestro cleanUp Function
  }, [company]);
  // a este se le llama arreglo de dependencias

  /*
  el arreglo de dependencias nos indica cuando se va a volver a usar el useEffect
  1. arreglo vacio
  2. que tenga dependencias
  3. que no exista
  */
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              {`Name: ${user.name}, Username: ${user.username}, Email: ${user.email}`}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
