import React from 'react';

class ArticleDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h4>{ this.props.name }</h4>
          <h5>{ new Intl.DateTimeFormat('en-us',{
            month:'short', 
            day: 'numeric'}).format(new Date(this.props.date)) } &bull; {this.props.toRead} min read</h5>
        </div>
    )
  }
}

export default ArticleDetails;
