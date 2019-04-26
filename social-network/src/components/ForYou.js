import React from 'react';
import ArticleCard from './ArticleCard'
import articleData from './your-articles.json';

class ForYou extends React.Component {
  
  render(){

    const newCard = articleData.map(article => <ArticleCard key={article.title} article={article} />)

    return (
      <div>
        <h2>For you</h2>
        <hr/>
        <div className="card-parent" style={{display: 'flex', flexWrap: 'wrap'}}>
        {newCard}
      </div>
      </div>
    )
  }
}

export default ForYou