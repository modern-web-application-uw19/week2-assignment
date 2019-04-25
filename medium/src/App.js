import React, { Component } from 'react';
import MissedPostList from './posts/MissedPostList';
import YourPostList from './posts/YourPostList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>For you</h3>
        <YourPostList />
        <h3>In case you missed it</h3>
        <MissedPostList />
      </div>
    );
  }
}

export default App;
