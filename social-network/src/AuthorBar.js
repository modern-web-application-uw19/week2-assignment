import React from 'react';
import PropTypes from 'prop-types';

export default class AuthorBar extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    isMember: PropTypes.bool,
    date: PropTypes.string,
    minRead: PropTypes.number
  }

  render() {
    const dateObj = new Date(this.props.date);
    // month string formatting follows example in 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
    const monthString = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObj);

    return (
      <div>
        <img className={this.props.isMember ? "AuthorImageBorder" : "AuthorImage"} src={this.props.image}></img>
        <span><b>{this.props.name}</b></span>
        <br></br>
        <span>{monthString} {dateObj.getDate()} • {this.props.minRead} min read</span>
      </div>
    )
  }
}
