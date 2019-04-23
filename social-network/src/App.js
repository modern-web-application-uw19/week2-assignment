import React, { Component } from 'react';
import './App.css';
import YourArticles from "./YourArticles";
import MissedArticles from "./MissedArticles";

class App extends Component {
  render() {
    return (
      <div >
        <div>
            <h2 className="head">For you</h2>
            <hr />
            <YourArticles />
        </div>
          <div>
              <h2 className="head">In case you missed</h2>
              <hr />
              <MissedArticles />
          </div>
      </div>
    );
  }
}

export default App;
