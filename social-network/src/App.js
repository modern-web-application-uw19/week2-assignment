import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ForYou from './ForYou';
import MissedIt from './MissedIt';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>For you</h4>
        <ForYou />
        <h4>In case you missed it</h4>
        <MissedIt />
      </div>
      
    );
  }
}

export default App;
