import React from 'react';
import audioIcon from '../assets/Speaker_Icon.svg';

class AudioAvailable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <span className="audio-avail">
          <img src={ audioIcon } alt="Listen to this article"/>
          Audio Available
        </span> 
    )
  }
}

export default AudioAvailable;
