import "./App.css";
import React, { useState } from "react";
import { Users } from "./Pages/Users";
import { Test } from "./Pages/Test";

function App() {
  const [serch, setSerch] = useState("");
  return (
    <>
      <input
        value={serch}
        onChange={(e) => setSerch(e.target.value)}
        placeholder="usuario"
      />
      {serch === "hola" ? <Test /> : <Users />}
    </>
  );
}

export default App;
