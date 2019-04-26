import React, { Component } from 'react';
import ForYouCard from './ForYouCard';
import yourArticles from './your-articles.json';
import './ForYouSection.css';

class ForYouSection extends Component {

  render() {
    const forYouCards = yourArticles
    .map((article, idx) => {
        return (
          <ForYouCard  
            title={article.title} 
            description={article.description}
            image={article.image} 
            link={article.link} 
            author={article.author} 
            postedDate={article.postedDate} 
            minutesToRead={article.minutesToRead} 
            hasAudioAvailable={article.hasAudioAvailable} 
            memberPreview={article.memberPreview} 
            />
          );
    });

    return (
      <div className="forYouSection">
        <h1>For you</h1>
        {forYouCards}
      </div>
    );
  }
}

export default ForYouSection;
