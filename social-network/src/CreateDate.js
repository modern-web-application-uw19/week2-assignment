import React, { Component } from 'react';

export default class CreateDate extends Component {

  render() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(this.props.postedDate);
    const month = monthNames[date.getMonth()];
    const day = date.getDate();

    return <span>{month} {day}</span>
  }
}
