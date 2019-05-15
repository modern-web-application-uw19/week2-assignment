import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    const titleStyle = {
      fontWeight: "bold",
      fontSize: "11pt"
    }

    return (
      <div>
        <p style={titleStyle}>{this.props.title}</p>
      </div>
    );
  }
}

export default Title;
