import React from 'react';
import yourArticles from './data/your-articles.json';
import ArticleCard from './ArticleCard';
import SectionHeader from './SectionHeader.js';

export default class ForYou extends React.Component {
  render() {
    const cards = yourArticles.map((c, i) => <ArticleCard data={c} key={i} layout="horizontal"/>);
    return <div>
      <SectionHeader name="For you"></SectionHeader>
      <div className="flex-container">
        {cards}
      </div>
    </div>;
  }
}