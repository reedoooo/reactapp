import React from 'react';
import Appfooter from './components/Appfooter';
import Appheader from './components/Appheader';
import Appmain from './components/Appmain';
import style from './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Appheader />
      </header>
      <main className="App-main">
          <Appmain />
      </main>
      <footer className="App-footer">
          <Appfooter />
      </footer>
    </div>
  );
}

export default App;
