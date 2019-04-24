import React from 'react';

class ArticleImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={ this.props.src } alt={this.props.title}/>
      </div> 
    )
  }
}

export default ArticleImage;
