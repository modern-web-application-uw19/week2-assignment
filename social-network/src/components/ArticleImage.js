import React from 'react';

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

export default ArticleImage;
