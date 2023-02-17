import React from 'react';
import Appfooter from './components/Appfooter';
import Appheader from './components/Appheader';
import Appmain from './components/Appmain';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";
import "./NavBar.scss"


function App() {
  return (
    <div className="App">
      {/* <div className="left-wrapper">
        <div className="nav-div">
            <NavBar />
        </div>
      </div> */}

      {/* <div className="right-wrapper">
        <div className="content-div"> */}
          <header className="App-header py-3">
            <Appheader />
          </header>
          <main className="App-main">
            <Appmain />
          </main>
          <footer className="App-footer py-3">
            <Appfooter />
          </footer>
        {/* </div>
      </div> */}
    </div>
  );
}

export default App;
