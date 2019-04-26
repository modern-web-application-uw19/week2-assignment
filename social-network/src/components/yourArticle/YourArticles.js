import React from 'react';
import yourArticlesData from '../../data/your-articles.json';
import YourArticle from './YourArticle.js';

export default class YourArticles extends React.Component {
    render() {
        const articles = yourArticlesData.map((article, id) => <YourArticle article={article} key={id}/>);
        return (
            <div>
               {articles}
            </div>
        );
    }
}