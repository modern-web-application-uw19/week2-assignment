

import React, { Component } from 'react';
import YourArticlesCard from './yourArticlesCard';
import yourArticles from './your-articles.json';

class YourArticles extends Component {

  render() {
    
    //present articles one at a time

    const yourArticlesCards = yourArticles
    .map((article, idx) => {
        return (
          <YourArticlesCard  
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
        <h1>Your Articles</h1>
        <hr></hr>
        <div className="flex-container">
          {yourArticlesCards}
        </div>
      </div>
    );
  }
}

export default YourArticles;
