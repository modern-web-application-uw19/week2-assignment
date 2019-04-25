import React from 'react';
import ArticleFeatures from './ArticleFeatures';
import PropTypes from 'prop-types';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    })
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

Summary.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
}

export default Summary;
