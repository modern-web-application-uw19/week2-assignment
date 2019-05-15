import React, { Component } from 'react';
import ForYouCard from './ForYouCard';
import yourArticles from './your-articles.json';

class ForYouSection extends Component {

  render() {
    const sectionStyle = {
      backgroundColor: "blue",
      width: "80%"
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
        {forYouCards}
      </div>
    );
  }
}

export default ForYouSection;
