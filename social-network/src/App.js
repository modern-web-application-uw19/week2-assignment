import React from 'react';
import './App.css';
import YourArticles from './components/yourArticle/YourArticles';
import MissedArticles from './components/missed-article/MissedArticles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <YourArticles />
        <MissedArticles />
      </header>
    </div>
  );
}

export default App;
