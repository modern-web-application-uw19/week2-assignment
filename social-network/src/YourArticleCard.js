import React from 'react';

export default class YourArticleCard extends React.Component {
  render() {
    const data = this.props.data;
    return <div className="card">
      <img className="card-image" src={data.image} alt="article" />
      <div className="card-body">
        <div className="card-title">
          {data.title}
        </div>
        <div className="card-description">
          {data.description}
        </div>
      </div>
    </div>;
  }
}