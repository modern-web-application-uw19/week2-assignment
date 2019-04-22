import React from 'react';
import { ReactCompnent as BookmarkIcon } from '../assets/bookmark.svg';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookmarked: false
    };
  }

  bookmarkArticle = event => {
    if (this.state.isBookmarked === false) {
      this.state.isBookmarked === true;
    } else {
      this.state.isBookmarked === false;
    }
  }
  
  render() {
    return (
      <div>
        <button>
          <BookmarkIcon />
        </button>
      </div>
    )
  }
}