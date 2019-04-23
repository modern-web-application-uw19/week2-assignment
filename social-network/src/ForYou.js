import React from 'react';
import yourArticles from './data/your-articles.json';
import YourArticleCard from './YourArticleCard';
import SectionHeader from './SectionHeader.js';

export default class ForYou extends React.Component {
  constructor(props) {
    super(props);
    this.state = { yourArticles: yourArticles };
  }

  render() {
    const cards = this.state.yourArticles.map((c, i) => <YourArticleCard data={c} key={i}/>);
    return <div>
      <SectionHeader name="For you"></SectionHeader>
      <div className="flex-container">
        {cards}
      </div>
    </div>;
  }
}