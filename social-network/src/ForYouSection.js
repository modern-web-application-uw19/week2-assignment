import React, { Component } from 'react';
import ForYouCard from './ForYouCard';
import yourArticles from './your-articles.json';
import './ForYouSection.css';

class ForYouSection extends Component {

  render() {
    const sectionStyle = {
      // backgroundColor: "yellow",
      width: "90%"
    }
    
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
            key={idx}
            />
          );
    });

    return (
      <div style={sectionStyle}>
        <h1>For you</h1>
        <hr></hr>
        <div className="flex-container">
          {forYouCards}
        </div>
      </div>
    );
  }
}

export default ForYouSection;
