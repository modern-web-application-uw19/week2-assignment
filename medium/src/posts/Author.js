import React, { Component } from 'react';
import '../styles/author.css';


export default class Author extends Component {
    render() {
      return (
        
        <div className="AuthorComponent">
            <img src={this.props.image} className="RoundLine" alt="img"></img>
            <p>{this.props.name}</p>
            <p>{this.props.postedDate}</p>  
            <p>{this.props.minutesToRead} min read</p>     
        </div>
       
      );
    }
  }
  