import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';

class Article extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        link: PropTypes.string,
        author: PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
          }).isRequired,
        postedDate: PropTypes.string,
        minutesToRead: PropTypes.number,
        hasAudioAvailable: PropTypes.bool,
        memberPreview: PropTypes.bool
    }

    render(){
        return (
            <a href={this.props.link}>
                <div className="article">
                    <span className="article-image">
                        <img src={this.props.image} className="article-image" alt={this.props.title}/>
                    </span>
                    <span>
                        <div className="card">
                            <div>{this.props.title ? '🔊 Audio available' : ''}</div>
                            <div className="b">{this.props.title}</div>
                            <div>{this.props.description}</div>
                            <div><Author 
                                author={this.props.author}
                                postedDate={this.props.postedDate}
                                minutesToRead={this.props.minutesToRead}/>
                            </div>
                    </div>
                    </span>
                </div>
            </a>
        );
    }
}

export default Article;