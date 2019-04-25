import React, { Component } from 'react';
import './App.css';
import MissedArticles from './MissedArticles';
import YourArticles from './YourArticles';

class App extends Component {
  render() {
    return (
      <div>
        
      <table width='90%'>
      <tr><td width='50%' valign='top'><YourArticles /></td></tr>
      <tr><td><MissedArticles /></td></tr>
      </table>
 
       </div>  
    );
  }
}
export default App;
