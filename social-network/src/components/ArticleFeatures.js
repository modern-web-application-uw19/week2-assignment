import React from 'react';
import './ArticleFeatures.css';
import audioIcon from '../assets/Speaker_Icon.svg';
import star from '../assets/star.svg';
import PropTypes from 'prop-types';

class ArticleFeatures extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const hasAudio = this.props.hasAudioAvailable;
    const isMemberPreview = this.props.isMemberPreview;

    if (hasAudio && isMemberPreview) {
      return (
        <div className={ `article__features` }>
          <span>
            <img src={ audioIcon } alt="Listen to this article"/> Audio Available
          </span>
          <span>
            <img src={ star } alt="Member Preview"/>
          </span>
        </div>
      )
    } else if (hasAudio) {
      return (
        <div className={ `article__features` }>
          <span>
            <img src={ audioIcon } alt="Listen to this article"/> Audio Available
          </span>
        </div>
      )
    } else if (isMemberPreview) {
      return (
        <div className={ `article__features` }>
          <span>
            <img src={ star } alt="Member Preview"/> Member Preview
          </span>
        </div>
      )
    } else{
      return(
        <div className={ `article__features d-none` }></div>
      )
      
    }
    
  }
}

ArticleFeatures.propTypes = {
  hasAudioAvailable: PropTypes.bool,
  isMemberPreview: PropTypes.bool
}

export default ArticleFeatures;
