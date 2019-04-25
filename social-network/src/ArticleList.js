import React from 'react';
import Article from './Article';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';

class ArticleList extends React.Component {
    render() {
        return (
            <div>
                <div className="b">For you</div>
                <div className="flex-container">
                    {yourArticles.map((article, i) => <Article key={i} {...article}/>)}
                </div>
                <div className="b">In case you missed it</div>
                <div className="flex-container">
                    {missedArticles.map((article, i) => <Article key={i} {...article}/>)}
                </div>
            </div>
        );
    }
}

export default ArticleList;
