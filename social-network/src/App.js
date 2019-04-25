// import missedArticles from './missed-articles.json';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import YourArticles from './YourArticles';
import MissedArticles from './MissedArticles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>For you</h1>
          <YourArticles />
          <h2>In case you missed it</h2>
          <MissedArticles />
      </div>
    );
  }
}

export default App;
