import React, { Component } from 'react';
import './App.css';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import ArticleSection from './components/ArticleSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleSection sectionTitle="For you" articleType="article__row" articles={yourArticles} />
        <ArticleSection sectionTitle="In case you missed it" articleType="article__column" articles={missedArticles} />
      </div>
    );
  }
}

export default App;
