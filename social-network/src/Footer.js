import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthorBio from './AuthorBio';
import Date from './Date';
import Minutes from './Minutes';
import Bookmark from './Bookmark';

class Footer extends Component {

  static propTypes = {
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isMediumMember: PropTypes.bool.isRequired
    }),
    postedDate: PropTypes.string.isRequired,    // "2018-03-27T07:00:00.000Z"
    minutesToRead: PropTypes.number.isRequired
  }

  render() {
    const footerStyle = {
      backgroundColor: "green"
    }

    return (
      <div style={footerStyle}>
        <AuthorBio author={this.props.author}/>
        <Date postedDate={this.props.postedDate}/>
        <Minutes minutes={this.props.minutesToRead}/>
        <Bookmark/>
      </div>
    );
  }
}

export default Footer;
