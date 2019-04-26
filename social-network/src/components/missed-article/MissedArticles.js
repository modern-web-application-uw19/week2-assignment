import React from 'react';
import missedArticlesData from '../../data/missed-articles.json';
import MissedArticle from './MissedArticle.js';

export default class MissedArticles extends React.Component {
    render() {
        const articles = missedArticlesData.map((article, id) => <MissedArticle article={article} key={id}/>);
        return (
            <div>
                <h3>In case you missed it</h3>
               {articles}
            </div>
        );
    }
}