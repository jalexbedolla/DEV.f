/*  esta es una aplicacion 'SPA.. single page aplication */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  SharedUserLayout,
} from "./Pages";

const App = () => {
  return (
    /* 1. definir como wrapper general de todos los componentes a createBrowseRouter */
    /* 2. 'RouterProvider' indica los componentes que sirven como rutas de navegacion */
    /* 3. definir las rutas las cuales tienen 2 props: path, element */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="albums" element={<Albums />} />
        <Route path="comments" element={<Comments />} />
        <Route path="photos" element={<Photos />} />
        <Route path="post" element={<Post />} />
        {/* <Route path="singleUser" element={<SingleUser />} /> */}
        <Route path="todos" element={<Todos />} />
        <Route path="users" element={<SharedUserLayout/>}>
          <Route index element={<Users/>}/>
          <Route path=":userId" element={<SingleUser/>}/>
        </Route>      
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
