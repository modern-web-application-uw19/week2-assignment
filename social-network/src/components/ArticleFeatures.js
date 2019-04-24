import React from 'react';
import './ArticleFeatures.css';
import audioIcon from '../assets/Speaker_Icon.svg';
import star from '../assets/star.svg';

class ArticleFeatures extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hasAudio = this.props.hasAudioAvailable;
    const isMemberPreview = this.props.isMemberPreview;
    let featureEl;
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

export default ArticleFeatures;
