import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import ArticleSection from './components/ArticleSection';

class App extends Component {
  render() {
    return (
      <div className={ `App container` }>
        <ArticleSection sectionTitle="For you" articleType="row" articles={yourArticles} />
        <ArticleSection sectionTitle="In case you missed it" articleType="column" articles={missedArticles} />
      </div>
    );
  }
}

export default App;
