import React, { Component } from 'react';
import './App.css';
import ForYouCard from './ForYouCard';
import MissedItCard from './MissedItCard';


class App extends Component {
      render() {
        return (
          <div className="App">
            <h2>For You</h2>
            <div class="card-container">
              <ForYouCard />
            </div>
            <h2>In Case You Missed It</h2><hr role="presentation"/>
            <div class="card-container">
              <MissedItCard />
            </div>
          </div>
        );
      }
    }

export default App;
