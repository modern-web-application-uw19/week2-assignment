import React, { Component } from 'react';
import MissedArticlesCard from './MissedArticlesCard';
import missedArticles from './missed-articles.json';

class MissedArticles extends Component {

  render() {
    
    const missedArticlesCards = missedArticles
    .map((article, idx) => {
        return (
          <MissedArticlesCard  
            title={article.title} 
            description={article.description}
            image={article.image} 
            link={article.link} 
            author={article.author} 
            postedDate={article.postedDate} 
            minutesToRead={article.minutesToRead} 
            hasAudioAvailable={article.hasAudioAvailable} 
            memberPreview={article.memberPreview} 
            key={idx}
            />
          );
    });

    return (
      <div className = "section-style">
        <h1>Missed Articles</h1>
        <hr></hr>
        <div className="flex-container">
          {missedArticlesCards}
        </div>
      </div>
    );
  }
}

export default MissedArticles;
