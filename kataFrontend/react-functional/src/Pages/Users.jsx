import React, { useState, useEffect } from "react"; // no olvidar poner los hook a usar

export const Users = () => {
  const getUserData = () => {};

  // esta es la funciont que se ejecuta "cuando nuestro componente se monta por primera vez en la UI"
  useEffect(() => {
    //aqui escribimos nuestro callBack
    console.log("hola..me monte en la pantalla :)");
    getUserData();
    // y aqui nuestro cleanUp Function
  }, []);
  // a este se le llama arreglo de dependencias

  const [users, setUsers] = useState([]);
  /*
  el arreglo de dependencias nos indica cuando se va a volver a usar el useEffect
  1. arreglo vacio
  2. que tenga dependencias
  3. que no exista
  */
  return <div>Users</div>;
};
