import React from 'react';
import './ArticleDetails.css';
import PropTypes from 'prop-types';

class ArticleDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="name-date">
          <h4>{ this.props.name }</h4>
          <h5>{ new Intl.DateTimeFormat('en-us',{
            month:'short', 
            day: 'numeric'}).format(new Date(this.props.date)) } &bull; {this.props.toRead} min read</h5>
        </div>
    )
  }
}

ArticleDetails.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  toRead: PropTypes.number
}

export default ArticleDetails;
