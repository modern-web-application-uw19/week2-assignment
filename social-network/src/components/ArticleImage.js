import React from 'react';
import PropTypes from 'prop-types';

class ArticleImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img className="article__image" src={ this.props.src } alt={this.props.title}/>
    )
  }
}

ArticleImage.propTypes = {
  src: PropTypes.string
}
export default ArticleImage;
