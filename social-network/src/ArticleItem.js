import React from 'react';
import PropTypes from 'prop-types';

export default class ArticleItem extends React.Component {
    
    static propTypes = {
        article: PropTypes.object
    }

    render() {
        let imgStyle = {};
        let audioIndicatorStyle = {};
        let memberPreviewStyle = {};
        if(this.props.article.author.isMediumMember === true){
            imgStyle.border = '1px solid green'
        };
        let abbreviatedDate = new Date(this.props.article.postedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric'});
        if(this.props.article.hasAudioAvailable === true){
            audioIndicatorStyle.display = 'block';
        }        
        if(this.props.article.memberPreview === true){
            memberPreviewStyle.display = 'block';
        }        
        
        return (
            <article>
                <img className="imgMain" src={this.props.article.image} alt="" />
                <p className="audio-indicator" style={audioIndicatorStyle}>* Audio available</p>
                <p className="preview-indicator" style={memberPreviewStyle}>* Member preview</p>
                <h1>{this.props.article.title}</h1>
                <p>{this.props.article.description}</p>
                <div className="author">
                    <img style={imgStyle} src={this.props.article.author.image} alt="" />
                    <h2>{this.props.article.author.name}</h2>
                    <p><span>{abbreviatedDate} - {this.props.article.minutesToRead} min read</span></p>
                </div>
                <span className="share-link"><a href={this.props.article.link}>[share]</a></span>
            </article>
        );
    }
}