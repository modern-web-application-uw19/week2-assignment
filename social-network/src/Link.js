import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {

  static propTypes = {
    link: PropTypes.string.isRequired,
  }

  render() {

    return (
      <div>
        <p><a href={this.props.link}>{this.props.link}</a></p>
      </div>
    );
  }
}

export default Link;
