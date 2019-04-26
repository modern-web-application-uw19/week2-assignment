import React from 'react';
import _missedArticles from './missed-articles.json';
import ArticleItem from './ArticleItem';

export default class MissedArticles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: _missedArticles
        };
    }

    render() {
        const articlesMissed = this.state.articles.map( (art, idx) => <ArticleItem article={art} key={idx} />);
        return (
            <div>
                <article className="article-missed">
                    {articlesMissed}
                </article>
            </div>
        );        
    }
}