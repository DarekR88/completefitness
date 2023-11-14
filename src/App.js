import React, { useState, useRef, useEffect } from "react";
import "./Global.scss";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./components/Home/Home";

const App = () => {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [toolbarShow, setToolbarShow] = useState(true);
  const [backdropShow, setBackdropShow] = useState(false);
  
  const toggleBackdrop = () => {
    setBackdropShow(!backdropShow);
  };

  const toggleToolbar = () => {
    setToolbarShow(!toolbarShow);
  };

  const toggleSideDrawer = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  return (
    <div className="App">
      <Toolbar />
      <Home />
    </div>
  );
};

export default App;
