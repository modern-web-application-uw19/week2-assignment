import React, { Component } from 'react';
import Article from './Article';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import PropTypes from 'prop-types';

class Articles extends Component {
    render() {
        const articlesNew = yourArticles.map((article, index) => <Article article={article} key={index} />);
        const articlesMissed = missedArticles.map((article, index) => <Article article={article} key={index} />);

        return (
            <div id="allArticles">
                <h2><span>For you</span></h2>
                <div id="yourArticles">{articlesNew}</div>
                <h2><span>In case you missed it</span></h2>
                <div id="missedArticles">{articlesMissed}</div>
            </div>
        );
    }
}

Article.propTypes = {
    articlesNew: PropTypes.object,
    articlesMissed: PropTypes.object
}

export default Articles;