import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Speaker from './speaker.svg';
import Star from './star.svg';

class Article extends Component {
    render() {
        const datePosted = this.props.article.postedDate;
        const audioAvailable = this.props.article.hasAudioAvailable;
        const hasMemberPreview = this.props.article.memberPreview;
        const mediumMember = this.props.article.author.isMediumMember;

        // get the date posted and format it to match screenshot
        function formatDate(date) {
            const newDate = new Date(datePosted);
            const day = newDate.getDate();

            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            const monthNum = newDate.getMonth();
            const month = months[monthNum];

            return <span>{month} {day}</span>
        }

        return (
            <div className="article">
                <a href={this.props.article.link}>
                    <div className="articleImage"><img src={this.props.article.image} alt={this.props.article.title} /></div>
                    <div className="audioPreview">
                        {audioAvailable && 
                            <span className="audio"><img src={Speaker} alt="speaker icon" /> Audio Available</span>
                        }
                        {hasMemberPreview &&
                            <span className="memberPreview"><img src={Star} alt="star icon" /> Member Preview</span>
                        }
                    </div>
                    <div className="title">{this.props.article.title}</div>
                    <div className="description">{this.props.article.description}</div>
                    <div className="authorInfoMeta">
                        <div className="authorImage"><img className={mediumMember ? "mediumMember" : ''} src={this.props.article.author.image} alt={this.props.article.author.name} /></div>
                        <div className="authorName">{this.props.article.author.name}</div>
                        <div className="meta">
                            <span className="posted">{formatDate(this.props.article.postedDate)}</span> &ndash; <span className="readTime">{this.props.article.minutesToRead} min read</span>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

Article.propTypes = {
    datePosted: PropTypes.string,
    audioAvailable: PropTypes.bool,
    hasMemberPreview: PropTypes.bool,
    mediumMember: PropTypes.bool
}

export default Article;