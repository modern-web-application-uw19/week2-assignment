import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Audio extends Component {

  static propTypes = {
    hasAudioAvailable: PropTypes.bool.isRequired,
  }

  render() {
    const audioStyle = {
      fontSize: "9pt"
    }

    const audio = () => {
      if (this.props.hasAudioAvailable) {
        return (
          <p style={audioStyle}>Audio available</p>
          );
      }
    }

    return (
      <div>
        {audio()}
      </div>
    );
  }
}
