import React, { useState } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const App = () => {

  const [show, setShow] = useState({
    modalIsOpen: false,
    showBlog: false,
  });



  return (
    <div className="App">
      <h1>React Animations</h1>
      <button onClick={() => setShow(prevState => ({ ...prevState, showBlog: !prevState.showBlog }))}>toggle</button>
      <Transition
        in={show.showBlog}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        {show => (
          <div style={{
            backgroundColor: "red",
            width: 100,
            height: 100,
            margin: "auto",
            transition: 'opacity 1s ease-out',
            opacity: show === 'exiting' ? 0 : 1,
          }}
          />
        )
        }
      </Transition>
      <br />

      <Modal show={show.modalIsOpen} closed={() => setShow({ modalIsOpen: false })} />
      {show.modalIsOpen && <Backdrop show={show.modalIsOpen} />}
      <button className="Button" onClick={() => setShow({ modalIsOpen: true })}>Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
