import React from 'react';
import audioIcon from '../assets/Speaker_Icon.svg';

class ArticleFeatures extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span className="audio-avail">
          <img src={ audioIcon } alt="Listen to this article"/>
          Audio Available
        </span> 
      </div>
    )
  }
}

export default ArticleFeatures;
