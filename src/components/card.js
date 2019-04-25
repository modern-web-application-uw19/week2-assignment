import React, { Component } from 'react';
import Bookmark from './bookmark.js';
import PropTypes from 'prop-types';

class Card extends Component {
    //constructor(props) {
    //    super(props);
    //}

    state = {
        isRead: false,
    }

    render() {
        return (
            <div className="card">
                <img src={this.props.cardPic} alt="a cat"></img>
                <div className="cardContent">
                    <div className="upper">
                        <a href={this.props.url} className="cardTitle">{this.props.title}</a>
                        <div className="cardBlurb">{this.props.blurb}</div>
                    </div>
                    <div className="authorInfo">
                        <img src={this.props.aPic} alt="an author"></img>
                        <span>{this.props.author}</span>
                        <span>{this.props.date}</span><br/>
                        <span>{this.props.length} min read</span>
                        <Bookmark state="on"></Bookmark>
                    </div>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    cardPic: PropTypes.string,
    title: PropTypes.string,
    blurb: PropTypes.string,
    author: PropTypes.string,
    aPic: PropTypes.string,
    date: PropTypes.string,
    length: PropTypes.number,
    url: function(props, urlProp, componentName) {
        if(!/https:[\/]{2}[[A-Za-z0-9-.*@]{1,}[\/]{1}]+/.test(props[urlProp])) {
            return new Error(
                `Invalid prop ${urlProp} supplied to ${componentName}. Validation failed.`
            );
        }
    }
};

export default Card;