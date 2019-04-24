import React from 'react';
import star from '../assets/star.svg';

class AudioAvailable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <span className="audio-avail">
          <img src={ star } alt="Member preview"/>
          Member preview
        </span> 
    )
  }
}

export default AudioAvailable;
