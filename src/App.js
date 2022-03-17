import React,{useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
const axios= require('axios');


export default function App() {
//funcion que hace la llamda a la api la envio a NAV. Ahi agarro la city del input, ejecuto la funcion con esa city y de alguna manera
//vuelve a app 

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Nav/>}/>
        </Routes>     
      </div>
    </BrowserRouter>
  );
}
