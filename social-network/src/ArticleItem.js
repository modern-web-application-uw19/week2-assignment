import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author.js';

export default class ArticleItem extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      author: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired,
      postedDate: PropTypes.string.isRequired,
      minutesToRead: PropTypes.number.isRequired
    }).isRequired
  }

  render() {
    const data = this.props.data;
    const orientation = this.props.orientation;

    function AudioHeader() {
      if (data.hasAudioAvailable && data.memberPreview) {
        return <div className="sub-header">🔊 Audio available ★</div>;
      }
      else if (!data.hasAudioAvailable && data.memberPreview) {
        return <div className="sub-header">★ Member preview</div>;
      }
      else if (data.hasAudioAvailable && !data.memberPreview) {
        return <div className="sub-header">🔊 Audio available</div>;
      }
      else {
        return "";
      }
    }

    return (
      <div className="item">
        <img className={"item-picture-" + orientation} src={data.image} onClick={(event) => window.open(data.link,"_blank")} alt="Article" />
        <div className={"item-body-" + orientation}>
          <AudioHeader />
          <div className="item-title">
            {data.title}
          </div>
          <div className="item-description">
            {data.description}
          </div>
          <Author author={data.author} postedDate={data.postedDate} minutesToRead={data.minutesToRead} />
        </div>

      </div>

    );
  }
}
