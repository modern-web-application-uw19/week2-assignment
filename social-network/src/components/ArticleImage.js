import React from 'react';

class ArticleImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="article__image" src={ this.props.src } alt={this.props.title}/>
      </div> 
    )
  }
}

export default ArticleImage;
