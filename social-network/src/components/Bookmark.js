import React from 'react';
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
        <button>
          <img src={ bookmarkIcon } alt="Bookmark This Article"/>
        </button>
    )
  }
}

export default Bookmark;