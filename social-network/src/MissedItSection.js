import React, { Component } from 'react';
import MissedItCard from './MissedItCard';
import missedArticles from './missed-articles.json';
import './MissedItSection.css';

export default class MissedItSection extends React.Component {

  render() {
    const missedItCards = missedArticles
    .map((article, idx) => {
        return (
          <MissedItCard  
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
      <div className="missedItSection">
        <h1>In case you missed it</h1>
        {missedItCards}
      </div>
    );
  }
}
