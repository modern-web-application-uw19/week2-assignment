import React from 'react';
import ArticleDetails from './ArticleDetails';
import Avatar from './Avatar';
import Bookmark from './Bookmark';

class DetailBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`d-flex`}>
        <Avatar 
          src={ this.props.article.author.image } 
          isMember={ this.props.article.author.isMediumMember } 
        />
        <ArticleDetails 
          name={ this.props.article.author.name }
          date={ this.props.article.postedDate }
          toRead={ this.props.article.minutesToRead }
        />
        <Bookmark />
      </div>
    )
  }
}

export default DetailBlock;
