import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image.js';
import Text from './Text.js';
import AuthorBar from './AuthorBar.js';
import Bookmark from './Bookmark.js';

class Article extends React.Component {

  static propTypes = {
    item: PropTypes.object,
    link: PropTypes.string,
    isYourArticles: PropTypes.bool,
    idx: PropTypes.number
  }

  goToLink = () => {
    window.location.href = this.props.item.link;
  }

  render() {
    return (
      <div className="Article" onClick={this.goToLink}>
        <Image
          imageUrl={this.props.item.image}
          isYourArticles={this.props.isYourArticles}
          key={this.props.idx}
        />
        <div>
          <Text
            title={this.props.item.title}
            hasAudio={this.props.item.hasAudioAvailable}
            hasPreview={this.props.item.memberPreview}
            blurb={this.props.item.description}
            key={this.props.idx}
          />
          <AuthorBar
            name={this.props.item.author.name}
            image={this.props.item.author.image}
            isMember={this.props.item.author.isMediumMember}
            date={this.props.item.postedDate}
            minRead={this.props.item.minutesToRead}
            key={this.props.idx}
          />
          <Bookmark />
        </div>
      </div>
    )
  }
}

export default Article;
