import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import ArticleList from './ArticleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList />
      </div>
    );
  }
}

export default App;
