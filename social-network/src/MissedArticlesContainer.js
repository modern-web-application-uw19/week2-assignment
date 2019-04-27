import React, {Component} from 'react';
import ArticleCard from './ArticleCard';
import missedArticles from './missed-articles.json';


class MissedArticlesContainer extends Component {
    
    render() {
        const MissedArticlesList = missedArticles
        .map((article, index) => {
            return (
                <ArticleCard 
                    title={article.title} 
                    description={article.description} 
                    img={article.image} 
                    authorImg={article.author.image} 
                    author={article.author.name} 
                    date={article.postedDate} 
                    readTime={article.minutesToRead} 
                    key={index}
                />
            );
        });

        return (
            <div className="missedArticles">
                <br/><br/>
                <h1>Incase you missed it</h1>
                <ul>{MissedArticlesList}</ul>
            </div>
        );
    }
}

export default MissedArticlesContainer;