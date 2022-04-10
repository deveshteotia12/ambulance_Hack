import React from "react";
import Home from "./Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import technology from "./pages/technology";
import signin from "./pages/signin";
import './App.css';
import Ambulance from './Pages/Ambulance';
import User from './Pages/User';
import { Routes, Route, Link } from 'react-router-dom';


const App = () => {
  return (

    <Routes>   
      <Route exact path="/" element={<Home/>}></Route>
       <Route path="/technology" component={<technology/>}></Route>
        <Route path="/contact" component={<Contact/>}></Route>
        <Route path="/service" component={<Service/>}></Route>
        <Route path="/signin" component={<signin/>}></Route>
        <Route component={<Error/>}></Route>
      <Route exact path="/ambulance" element={<Ambulance />}></Route>
      <Route exact path="/user" element={<User />}></Route>
    </Routes>
  );
};

export default App;
