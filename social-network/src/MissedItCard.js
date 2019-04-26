import React, { Component } from 'react';
import Bookmark from './Bookmark';
import './MissedItCard.css';

export default class MissedItCard extends React.Component {

  render() {

    return (
      <div className="missedItCard">
        <a href={this.props.link}>{this.props.link}<br/>
          <img src={this.props.image}/>
          <p>hasAudioAvailable: {this.props.hasAudioAvailable.toString()}</p>
          <p>memberPreview: {this.props.memberPreview.toString()}</p>
          <p>title: {this.props.title}</p>
          <p>description: {this.props.description}</p>

          <p>author.isMediumMember: {this.props.author.isMediumMember.toString()}</p>
          <img src={this.props.author.image}/>
          <p>author.name: {this.props.author.name}</p>
          <p>postedDate: {this.props.postedDate}</p>
          <p>{this.props.minutesToRead} min read</p>
          <Bookmark/>
        </a>
      </div>
    );
  }
}
