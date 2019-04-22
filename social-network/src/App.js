import React, { Component } from 'react';
import logo from './logo.svg';
import ribbon from './ribbon.svg';
import './App.css';
import YourArticles from './_data/your-articles.json';

class App extends Component {
  render() {
    return (
      <div >
        
          <MyCard cName = 'CardRight' posNum='0'/>
          <MyCard cName = 'CardLeft'  posNum='1'/>
          <MyCard cName = 'CardRight' posNum='2'/>
          <MyCard cName = 'CardLeft'  posNum='3'/>
           
          <img src={logo} className="App-logo" alt="logo" />
         
        
      </div>
    );
  }
}
/*********************************** */
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
          {YourArticles[this.props.posNum]['postedDate']} 
          {YourArticles[this.props.posNum]['minutesToRead']} min read
          <img src={ribbon} className = 'Ribbon-logo' />
        </h6>
        
      </div>

    );

  }


}

/*********************************** */
export default App;