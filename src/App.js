import React, { useState, useRef, useEffect } from "react";
import "./Global.scss";

const App = () => {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [toolbarShow, setToolbarShow] = useState(true);
  const [backdropShow, setBackdropShow] = useState(false);
  
  const toggleBackdrop = () => {
    setBackdropShow(!backdropShow)
  }

  const toggleToolbar = () => {
    setToolbarShow(!toolbarShow)
  }

  const toggleSideDrawer = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  return (
    <div className="App">
      <p>Hello World!</p>
    </div>
  );
};

export default App;
