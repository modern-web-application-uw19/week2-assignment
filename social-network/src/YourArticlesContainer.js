import React, {Component} from 'react';
import ArticleCard from './ArticleCard';
import yourArticles from './your-articles.json';


class YourArticlesContainer extends Component {
    
    render() {
        const YourArticlesCards = yourArticles
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
            <div className="forYouArticles">
                <h1>For you</h1>
                <ul>{YourArticlesCards}</ul>
            </div>
        );
    }
}

export default YourArticlesContainer;