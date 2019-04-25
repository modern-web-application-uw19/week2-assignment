import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
    render() {
        const datePosted = this.props.article.postedDate;

        function formatDate(date) {
			const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
			const newDate = new Date(datePosted);
            const day = newDate.getDate();
            const month = months[newDate.getMonth()];

            return <span>{month} {day}</span>
        }

        return (
            <div className="article">
                <a href={this.props.article.link}>
                    <div className="articleImage">
					  <img src={this.props.article.image}/>
					</div>
                    <h2 className="articleTitle">{this.props.article.title}</h2>
                    <p className="articleDescription">{this.props.article.description}</p>
                    <div className="articleInfo">
                        <div className="authorImage">
							<img src={this.props.article.author.image}/>
						</div>
                        <div className="authorName">{this.props.article.author.name}</div>
                        <div className="datePosted">
                            <span>{formatDate(this.props.article.postedDate)}</span> &ndash; 
							<span>{this.props.article.minutesToRead} min read</span>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

Article.propTypes = {
    datePosted: PropTypes.string
}

export default Article;