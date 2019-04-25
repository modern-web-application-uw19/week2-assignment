import React from 'react';
import ArticleDetails from './ArticleDetails';
import Avatar from './Avatar';
import Bookmark from './Bookmark';
import PropTypes from 'prop-types';

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

DetailBlock.propTypes = {
  article: PropTypes.object
}
export default DetailBlock;
