import React, { Component } from 'react';
import './App.css';
import Section from './Section.js';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import Container from 'react-bootstrap/Container';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="App">
          <Section sectionName={"For you"} data={yourArticles}/>
          <Section sectionName={"In case you missed it"} data={missedArticles}/>
        </div>
      </Container>
    );
  }
}

export default App;
