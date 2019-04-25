import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';

export default class ArticleCard extends React.Component {
  render() {
    const data = this.props.data;
    return <div className={'card ' + this.props.layout}>
      <img className="card-image" src={data.image} alt="article" />
      <div className="card-body">
        <div className="card-title">
          {data.title}
        </div>
        <div className="card-description">
          {data.description}
        </div>
        <Author author={data.author} postedDate={data.postedDate} minutesToRead={data.minutesToRead}/>
      </div>
    </div>;
  }
}

ArticleCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired
  }).isRequired,
  layout: PropTypes.string.isRequired,
}