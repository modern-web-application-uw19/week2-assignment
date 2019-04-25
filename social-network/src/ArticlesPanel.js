import React from 'react';
import ArticleCard from './ArticleCard';
import SectionHeader from './SectionHeader.js';

export default class ArticlesPanel extends React.Component {
  render() {
    const cardLayout = this.props.layout === "your-articles" ? 'horizontal' : 'vertical';
    const cards = this.props.articles.map((c, i) => <ArticleCard data={c} key={i} layout={cardLayout}/>);
    return <div>
      <SectionHeader name={this.props.title}></SectionHeader>
      <div className="flex-container">
        {cards}
      </div>
    </div>;
  }
}