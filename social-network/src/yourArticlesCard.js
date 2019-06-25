import React, { Component } from 'react';
import AuthorImage from './AuthorImage';
import CreateDate from './CreateDate';
import PropTypes from 'prop-types';

class YourArticlesCard extends Component {

  static propTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    hasAudioAvailable: PropTypes.bool.isRequired,
    memberPreview: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isMediumMember: PropTypes.bool.isRequired
    }),
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired
  }

  render() {
    //toggle has audio tag
    const audio = () => {
        if (this.props.hasAudioAvailable) {
          return (
            <p className = "has-audio">Audio available</p>
            );
        }
      }
      // format and return article data
    return (
      <div className="your-articles">
        <div className="row">
          <div className="column">
            <div className="article-image">
              <img src={this.props.image} alt="article"/>
            </div>
          </div>
          <div className="column2">
            <div>
                <p><a href={this.props.link}>Link</a></p>
            </div>
            <div>
                {audio()} // why does this throw errors when inline?
            </div>
            <div>
                <p className="member-preview">* Member preview</p>
            </div>
            <div>
                <p className="article-title">{this.props.title}</p>
            </div>
            <div>
                <p className="article-description">{this.props.description}</p>
            </div>

            <div className="footer">
                    <div className="row">
                        <div className="footerColumn">
                            <AuthorImage author={this.props.author}/>
                        </div>
                        <div className="footerColumn2">
                            <div className="author-name">
                                <p>{this.props.author.name}</p>
                            </div>
                            <p><CreateDate postedDate={this.props.postedDate}/> &#183; <span>{this.props.minutesToRead} minutes</span> </p>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YourArticlesCard;
