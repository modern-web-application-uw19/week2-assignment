import React, { Component } from 'react';
import './App.css';
import MissedArticles from './MissedArticles';
import YourArticles from './YourArticles';

// Much more elegant

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='your-section-style'>
          <YourArticles/>
        </div>
        <div className='missed-section-style'>
          <MissedArticles/>
        </div>
      </div>
    );
  }
}

export default App;
