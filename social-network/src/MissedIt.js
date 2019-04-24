import React from 'react';
import yourArticles from './data/missed-articles.json';
import ArticleCard from './ArticleCard';
import SectionHeader from './SectionHeader.js';

export default class MissedIt extends React.Component {
  render() {
    const cards = yourArticles.map((c, i) => <ArticleCard data={c} key={i} layout="vertical" />);
    return <div>
      <SectionHeader name="In case you missed it"></SectionHeader>
      <div className="flex-container">
        {cards}
      </div>
    </div>;
  }
}