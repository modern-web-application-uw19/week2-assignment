import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Minutes extends Component {

  static propTypes = {
    minutesToRead: PropTypes.number.isRequired
  }

  render() {

    return (
      <span>{this.props.minutesToRead} min read</span>
    );
  }
}

export default Minutes;
