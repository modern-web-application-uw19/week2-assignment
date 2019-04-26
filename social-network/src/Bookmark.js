import React from 'react';
import bookmark from './icons/bookmark.svg';

export default class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    }
  }

  toggleBookmark = (e) => {
    e.stopPropagation();
    this.setState(prevState => {
      return {
        isSelected: !prevState.isSelected
      };
    });
  }

  render() {
    const classes = this.state.isSelected ? 'Bookmark BookmarkToggled' : 'Bookmark';

    return <img src={bookmark} className={classes} onClick={this.toggleBookmark}></img>
  }

}
