import React, { Component } from 'react';
import yourArticles from './data/your-articles.json';
import missedArticles from './data/missed-articles.json';
import Article from './Article.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      yourArticles: yourArticles,
      missedArticles: missedArticles
    }
  }

  render() {
    const yourArticlesList = this.state.yourArticles.map((item, idx) => {
      return (
        <Article item={item} isYourArticles={true} key={idx} />
      )
    });

    const missedArticlesList = this.state.missedArticles.map((item, idx) => {
      return (
        <Article item={item} isYourArticles={false} key={idx} />
      )
    });

    return (
      <div>
        <h1>For you</h1><hr></hr>
        <div className="grid-two-columns">
          {yourArticlesList}
        </div>
        <h1>In case you missed it</h1><hr></hr>
        <div className="grid-three-columns">
          {missedArticlesList}
        </div>
      </div>
    );
  }
}

export default App;
