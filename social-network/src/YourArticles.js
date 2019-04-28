import React from 'react';
import _yourArticles from './your-articles.json';
import ArticleItem from './ArticleItem';

export default class YourArticles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: _yourArticles,
        };
    }
    
    render() {
        const articlesYours = this.state.articles.map( (art, idx) => <ArticleItem article={art} key={idx} />
        );
    
        return (
            <div>
                <section className="article-yours">
                    <h1>For you</h1>
                    {articlesYours}
                </section>
            </div>
        );        
    }
}