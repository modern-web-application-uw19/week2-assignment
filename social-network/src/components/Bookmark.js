import React from 'react';
import './Bookmark.css';
import bookmarkIcon from '../assets/bookmark.svg';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookmarked: false
    };
  }

  render() {
    return (
        <button className="bookmark">
          <img src={ bookmarkIcon } alt="Bookmark This Article"/>
        </button>
    )
  }
}

export default Bookmark;