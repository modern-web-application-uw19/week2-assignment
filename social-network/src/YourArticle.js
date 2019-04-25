import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class YourArticle extends Component {
    render () {
        const article = this.props.post
        const publishDate = new Date(article.postedDate)
        const displayDate = publishDate.toString('dd-MMM-yyyy').substr(4, 6)
        return (
            <a href={article.link}>
                <div><img src={article.image} alt={article.title} /></div>
                <div>{article.title}</div>
                <div>{article.description}</div>
                <div>
                    <img src={article.author.image} alt={article.name} className='authorimg'/>
                    <div>{article.author.name}</div>
                    <div>
                        <span>{displayDate} - </span>
                        <span>{article.minutesToRead} min read</span>
                        </div>
                </div>
            </a>
        )
    }
}

export default YourArticle;
 