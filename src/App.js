import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Scoreboard from './components/Scoreboard';


function App() {
  return (
    <div className="App">
      <Title content="React 3"/>
      <header className="App-header">
        <Scoreboard />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
