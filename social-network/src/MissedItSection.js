import React, { Component } from 'react';
import MissedItCard from './MissedItCard';
import missedArticles from './missed-articles.json';
import './ForYouSection.css';

class MissedItSection extends Component {

  render() {
    const sectionStyle = {
      backgroundColor: "yellow",
      width: "90%"
    }

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
            key={idx}
            />
          );
    });

    return (
      <div style={sectionStyle}>
        <h1>In case you missed it</h1>
        <hr></hr>
        <div className="flex-container">
          {missedItCards}
        </div>
      </div>
    );
  }
}

export default MissedItSection;