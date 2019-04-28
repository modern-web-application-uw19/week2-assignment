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
                <section className="article-missed">
                    <h1>In case you missed it</h1>
                    {articlesMissed}
                </section>
            </div>
        );        
    }
}