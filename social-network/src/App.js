import React, { Component } from 'react';
import './App.css';
import forYou from './your-articles.json';
import missedIt from './missed-articles.json';
import ArticleBox from './articleBox.js';


class App extends Component {
  render() {
    return (
      <div>
        <ArticleBox className="" title="For You" articles={forYou} />
        <ArticleBox className="" title="In case you missed it" articles={missedIt} />
      </div>
      
    );
  }
}

export default App;
