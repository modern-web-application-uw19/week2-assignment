import React, { Component } from 'react';
import './Bookmark.css';

class Bookmark extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    }
  }

  toggleBookmark = () => {
    // console.log("in toggleBookmark");
    this.setState(prevState => {
      return {
        isSelected: !prevState.isSelected
      };
    });
  }

  render() {
    // approach 1:
    if (this.state.isSelected) {
      return <div className="bookmark bookmark--orange" onClick={this.toggleBookmark}></div>
    }

    return <div className="bookmark" onClick={this.toggleBookmark}></div>

    // approach 2:
    // const classes = this.state.isSelected ? 'bookmark bookmark--orange' : 'bookmark';
    // return <div className={classes} onClick={this.toggleBookmark}></div>
  }
}

export default Bookmark;
