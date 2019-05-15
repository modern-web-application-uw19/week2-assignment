import React, { Component } from 'react';
import MissedItCard from './MissedItCard';
import missedArticles from './missed-articles.json';

class MissedItSection extends Component {

  render() {
    const sectionStyle = {
      backgroundColor: "yellow",
      width: "80%"
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
        {missedItCards}
      </div>
    );
  }
}

export default MissedItSection;