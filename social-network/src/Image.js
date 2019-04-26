import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {

  static propTypes = {
    imageUrl: PropTypes.string,
    isYourArticles: PropTypes.bool
  }

  render() {
    const classes = this.props.isYourArticles ? 'Image ImageYourArticles' : 'Image ImageMissedArticles';

    return <img className={classes} src={this.props.imageUrl}></img>
  }
}
