import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Audio extends Component {

  static propTypes = {
    hasAudioAvailable: PropTypes.bool.isRequired,
  }

  render() {
    const audio = () => {
      if (this.props.hasAudioAvailable) {
        return (
          <p>Audio available</p>
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
