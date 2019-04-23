import React, { Component } from 'react';

export default class Author extends Component {
    render() {
      return (
        <div>
            <img src={this.props.image} alt="img"></img>
            <p>{this.props.name}</p>
            <p>{this.props.postedDate}</p>  
            <p>{this.props.minutesToRead} min read</p>     
        </div>
      );
    }
  }
  