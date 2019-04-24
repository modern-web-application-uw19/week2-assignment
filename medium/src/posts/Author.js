import React, { Component } from 'react';
import '../styles/author.css';



export default class Author extends Component {
    render() {

      const datePosted = this.props.postedDate;

        // get the date posted and format it to match screenshot
        function formatDate(date) {
            const newDate = new Date(datePosted);
            const day = newDate.getDate();

            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            const monthNum = newDate.getMonth();
            const month = months[monthNum];

            return <span>{month} {day}</span>
        }

      return (
        
        <div className="Container">
            <img src={this.props.image} className="RoundLine" alt="img"></img>
            <p>{this.props.name}</p>
            <p>{formatDate(this.props.postedDate)}<span>&#8226;</span>{this.props.minutesToRead} min read</p>     
        </div>
       
      );
    }
  }
  
 