import React from 'react';
import './App.css';
import YourArticles from './YourArticles';
import MissedArticles from './MissedArticles';

function App() {
  return (
    <div className="App">
      <YourArticles />
      <MissedArticles />
    </div>
  );
}

export default App;
