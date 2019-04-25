import React from 'react';
import './App.css';
import ArticlesPanel from './ArticlesPanel';
import yourArticles from './data/your-articles.json';
import missedArticles from './data/missed-articles.json';

function App() {
  return (
    <div className="App">
      <ArticlesPanel articles={yourArticles} 
                     layout="your-articles" 
                     title="For you" />
      <ArticlesPanel articles={missedArticles} 
                     layout="missed-articles" 
                     title="In case you mised it" />
    </div>
  );
}

export default App;
