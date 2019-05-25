import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';
import {articleProps} from './articleProps';

import './ArticleContainer.css';

export default class ArticleContainer extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        articles: PropTypes.arrayOf(articleProps).isRequired
    }

    render() {
        const {title, articles, className} = this.props;

        return (
            <div className={`ArticleContainer ${className}`}>
                <h2 className="ArticleContainer__header">{title}</h2>
                <div className="ArticleContainer__articles">
                    {articles.map((article, idx) => <Article article={article} key={idx} />)}
                </div>
            </div>
        );
    }
}