import React, { Component } from 'react';
import ForYou from './components/ForYou';
import MissedArticle from './components/MissedArticle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ForYou />
        <MissedArticle />
      </div>
    );
  }
}

export default App;
