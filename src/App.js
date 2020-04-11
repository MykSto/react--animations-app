import React, { useState } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const App = () => {

  const[show, setShow] = useState(false);

    return (
      <div className="App">
        <h1>React Animations</h1>
        {show && <Modal show={show} closed={()=>setShow(false)} />}
        {show && <Backdrop show={show} />}
        <button className="Button" onClick={()=>setShow(true)}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
}

export default App;
