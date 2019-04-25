import React from 'react';
import PropTypes from 'prop-types';
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

ArticlesPanel.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }),
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired
  })).isRequired
}