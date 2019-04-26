import React from 'react';
import PropTypes from 'prop-types';
import speaker from './icons/speaker.svg';

export default class Text extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    hasAudio: PropTypes.bool,
    hasPreview: PropTypes.bool,
    blurb: PropTypes.string
  }

  render() {
    let hasAudio;
    let hasPreview;

    if (this.props.hasAudio) {
      hasAudio = <span>
        <img src={speaker} className="Speaker" alt="speaker" />{' Audio available \n'}
      </span>
    } else if (this.props.hasPreview) {
      hasPreview = <span>{'Member preview\n'}</span>
    }

    return (
      <div>
        {hasAudio}
        {hasPreview}
        <h3>
          <b>{this.props.title}</b>
        </h3>
        <p>{this.props.blurb}</p>
      </div>
    )
  }
}
