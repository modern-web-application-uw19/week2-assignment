import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from './Bookmark.js';

export default class Author extends React.Component {
  static propTypes = {
    author: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isMediumMember: PropTypes.bool.isRequired
    }).isRequired,
    minutesToRead: PropTypes.number.isRequired,
    postedDate: PropTypes.string.isRequired
  }

  render() {
    const author = this.props.author;
    const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });
    const date = new Date(this.props.postedDate);
    const minutesToRead = this.props.minutesToRead;

    return <div className="author">
      <img className={author.isMediumMember ? "author-picture-frame" : "author-picture"} src={author.image} alt="Author" />
      <div className="author-body">
        <Bookmark />
        <div className="author-name">{author.name}</div>
        <div className="author-date">{dateFormat.format(date)} &#8226; {minutesToRead} min read</div>
      </div>
    </div>
  }
}