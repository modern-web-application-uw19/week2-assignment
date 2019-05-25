import React from 'react';
import {articleProps} from './articleProps';

import './Article.css';

export default class Article extends React.Component {
    static propTypes = {
        article: articleProps
    }

    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    getFormattedDate = () => {
        const {article} = this.props;
        const date = new Date(article.postedDate);

        const month = this.months[date.getMonth()];
        const day = date.getDate();

        return `${month} ${day}`
    }

    render() {
        const {article} = this.props;

        return (
            <div className="Article">
                <div className="Article__main-image" style={{backgroundImage: `url(${article.image})`}}></div>
                <div className="Article__content">
                    {article.hasAudioAvailable ? (
                        <div>
                            <i className="fa fa-volume-up" />
                            <span>Audio available</span>
                        </div>
                    ) : null}
                    {article.memberPreview ? <i className="fa fa-star" /> : null}
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <div className="Article__footer">
                        <div className="Article__author">
                            <img src={article.author.image} alt={article.author.name} />
                            <div className="Article__author-details">
                                <div className="Article__author-name">{article.author.name}</div>
                                <div className="Article__article-details">{this.getFormattedDate()} &#8226; {article.minutesToRead} min read</div>
                            </div>
                        </div>
                        <i className="Article__bookmark far fa-bookmark" />
                    </div>
                </div>
            </div>
        )
    }
}