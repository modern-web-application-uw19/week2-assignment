import React, { Component } from 'react';
import './App.css';
import ForYouSection from './ForYouSection';
import MissedItSection from './MissedItSection';

const forYouSectionStyle = {
  marginTop: "35px"
}

const missedItSectionStyle = {
  marginTop: "35px"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={forYouSectionStyle}>
          <ForYouSection/>
        </div>
        <div style={missedItSectionStyle}>
          <MissedItSection/>
        </div>
      </div>
    );
  }
}

export default App;
