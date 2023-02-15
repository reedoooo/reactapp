import React from 'react';
import Appfooter from './components/Appfooter';
import Appheader from './components/Appheader';
import Appmain from './components/Appmain';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import style from './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header py-3">
          <Appheader />
      </header>
      <main className="App-main">
          <Appmain />
      </main>
      <footer className="App-footer py-3">
          <Appfooter />
      </footer>
    </div>
  );
}

export default App;
