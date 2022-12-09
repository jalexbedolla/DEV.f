import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.css";
import {
  Albums,
  Comments,
  NotFound,
  Photos,
  Post,
  SingleUser,
  Todos,
  Users,
  Home,
} from "./Pages";

function App() {
  const [search, setSearch] = useState("");
  return (
    /* 1. definir como wrapper general de todos los componentes a createBrowseRouter */
    /* 2. 'RouterProvider' indica los componentes que sirven como rutas de navegacion */
    /* 3. definir las rutas las cuales tienen 2 props: path, element */
    <createBrowserRouter>
      <RouterProvider>
        <Route path="/" element={<Home />} />
        <Route path="albums" element={<Albums />} />
        <Route path="comments" element={<Comments />} />
        <Route path="photos" element={<Photos />} />
        <Route path="post" element={<Post />} />
        <Route path="singleUser" element={<SingleUser />} />
        <Route path="todos" element={<Todos />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </RouterProvider>
    </createBrowserRouter>
  );
}

export default App;
