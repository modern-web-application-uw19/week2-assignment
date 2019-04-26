import React, { Component } from 'react';
import Bookmark from './Bookmark';
import "./Footer.css";

class Footer extends React.Component {

  render() {

    return (
      <div>
        <p>In Footer</p>
        <p>author.isMediumMember: {this.props.author.isMediumMember.toString()}</p>
        <img src={this.props.author.image}/>
        <p>author.name: {this.props.author.name}</p>
        <p>postedDate: {this.props.postedDate}</p>
        <p>{this.props.minutesToRead} min read</p>
        <Bookmark/>
      </div>
    );
  }
}

export default Footer;
