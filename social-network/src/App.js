import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogPost from './BlogPost'
    
class App extends Component {
  render() {
      return (
   <div className="App">
     <BlogPost />
    </div>
    );  
 
  }
}

export default App;
