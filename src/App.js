
import React from "react";

import {
  BrowserRouter,  Route,
  Switch
} from "react-router-dom";
import './App.css';

import NavBar from './component/NavBar'
import Home from './component/Home'
import About from './component/About'
import Product from './component/Product'




function App() {
  return (
    <>
    <BrowserRouter>
    {/* <NavBar/> */}
    <Switch>
      <Route  path={'/'} component={Home}/>
      <Route  path={'/about'} component={About}/>
      <Route path={'/product'} component={Product}/>
    </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
