import React from 'react';
import ArticleFeatures from './ArticleFeatures';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ArticleFeatures hasAudioAvailable={this.props.article.hasAudioAvailable} isMemberPreview={this.props.article.memberPreview} />
        <h3 className="mt-2">{this.props.article.title}</h3>
        <p>{this.props.article.description}</p>
      </div>
    );
  }
}

export default Summary;
