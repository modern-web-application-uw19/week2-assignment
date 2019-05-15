import React, { Component } from 'react';
import './App.css';
import ForYouSection from './ForYouSection';
import MissedItSection from './MissedItSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ForYouSection/>
        <MissedItSection/>
      </div>
  );
  }
}

export default App;
