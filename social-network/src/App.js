import React, {Component} from 'react';
import missedArticles from './missed-articles.json';
import YourArticlesContainer from './YourArticlesContainer';
import MissedArticlesContainer from './MissedArticlesContainer';
import logo from './logo.svg';
import './App.css';
import './forYouArticles.css';
import './missedArticles.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <YourArticlesContainer />
        <MissedArticlesContainer />
      </div>
    )
  }
}

export default App;
