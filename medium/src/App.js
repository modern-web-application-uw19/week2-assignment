import React, { Component } from 'react';
import MissedPostList from './posts/MissedPostList';
import YourPostList from './posts/YourPostList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <YourPostList />
        <MissedPostList />
      </div>
    );
  }
}

export default App;
