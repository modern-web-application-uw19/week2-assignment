import React, { Component } from 'react';
import Section from './components/section.js';
import Card from './components/card.js';
import YourArticles from './components/your-articles.json';
import MissedArticles from './components/missed-articles.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <div id="foryou">
          <Section text="For you"/>
          <div className="cardHolder">
            {
              Object.keys(YourArticles).map(item => (
                <Card cardPic={YourArticles[item].image}
                  title={YourArticles[item].title}
                  url={YourArticles[item].link}
                  blurb={YourArticles[item].description}
                  aPic={YourArticles[item].author.image}
                  author={YourArticles[item].author.name}
                  length={YourArticles[item].minutesToRead}>
                </Card>
              ))
            }
          </div>
        </div>

        <div id="missed">
          <Section text="In case you missed it"/><br/>
          <div className="cardHolder">
            {
              Object.keys(MissedArticles).map(item => (
                <Card cardPic={MissedArticles[item].image}
                  title={MissedArticles[item].title}
                  url={YourArticles[item].link}
                  blurb={MissedArticles[item].description}
                  aPic={MissedArticles[item].author.image}
                  author={MissedArticles[item].author.name}
                  length={YourArticles[item].minutesToRead}>
                </Card>
              ))
            }
          </div>
        </div>
      </>
    );
  }
}

export default App;
