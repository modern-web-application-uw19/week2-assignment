import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SocialNetwork from './SocialNetwork.js';
//import missedArticles from './missed-articles.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <SocialNetwork />
      </div>
    );
  }
}

export default App;
