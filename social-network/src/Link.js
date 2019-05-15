import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {

  static propTypes = {
    link: PropTypes.string.isRequired,
  }

  render() {
    const linkStyle = {
      fontSize: "9pt"
    }

    return (
      <div>
        <p style={linkStyle}><a href={this.props.link}>Link</a></p>
      </div>
    );
  }
}

export default Link;
