import React, { Component } from 'react';
import logo from './logo.svg';
import ribbon from './ribbon.svg';
import './App.css';
import YourArticles from './_data/your-articles.json';
import MissedArticles from './_data/missed-articles.json';

class App extends Component {
  render() {
    return (
      <div className = 'black'>
        <div>
          <MyCard cName = 'Card' posNum='0'/>
          <MyCard cName = 'Card'  posNum='1'/>
          <MyCard cName = 'Card' posNum='2'/>
          <MyCard cName = 'Card'  posNum='3'/>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h3 className = 'Tab'> In case you missed it</h3>
        <hr/>

          
          <MyMissedCard cName = 'MissedCard' posNum='0'/>
          <MyMissedCard cName = 'MissedCard'  posNum='1'/>
          <MyMissedCard cName = 'MissedCard' posNum='2'/>
         
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </div>
    );
  }
}
/*********************************** */
class MyMissedCard extends React.Component {
  
  render() {
    let x = parseInt(this.props.posNum);
    return (
        
        <div className = {this.props.cName}>
          <img src={MissedArticles[x]['image']} className='MyMissedImage'/>
          <h4>{MissedArticles[x]['title']}</h4>
          <p>{MissedArticles[x]['description']}</p>
          <MyMissedAuthor authorName = {MissedArticles[x].author['name']} posNum = {x}/> 

        </div>
     );
  }
}

class MyMissedAuthor extends React.Component{

  render(){

    return(

      <div>
        <img src = {MissedArticles[this.props.posNum].author['image']} className = 'MyRoundImage'/> 
        <h6>{this.props.authorName}</h6>
        <h6>
          {MissedArticles[this.props.posNum]['postedDate']} &nbsp;
          {MissedArticles[this.props.posNum]['minutesToRead']} min read
          <img src={ribbon} className = 'Ribbon-logo' />
        </h6>
        
      </div>

    );

  }


}

class MyCard extends React.Component {
  
  render() {
    let x = parseInt(this.props.posNum);
    return (
        
        <div className = {this.props.cName}>
          <img src={YourArticles[x]['image']} className='MyImage'/>
          <h4>{YourArticles[x]['title']}</h4>
          <p>{YourArticles[x]['description']}</p>
          <MyAuthor authorName = {YourArticles[x].author['name']} posNum = {x}/> 

        </div>
     );
  }
}

class MyAuthor extends React.Component{

  render(){

    return(

      <div>
        <img src = {YourArticles[this.props.posNum].author['image']} className = 'MyRoundImage'/> 
        <h6>{this.props.authorName}</h6>
        <h6>
          {YourArticles[this.props.posNum]['postedDate']} &nbsp;
          {YourArticles[this.props.posNum]['minutesToRead']} min read
          <img src={ribbon} className = 'Ribbon-logo' />
        </h6>
        
      </div>

    );

  }


}

/*********************************** */
export default App;