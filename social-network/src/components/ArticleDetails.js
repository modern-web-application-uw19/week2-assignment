import React from 'react';

class ArticleDetails extends React.Component {
  constructor(props) {
    super(props);
    this.getDate = this.getDate.bind(this);
  }
  getDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const date = new Date(this.props.date);
    return `${months[date.getMonth]} ${date.getDate}`; 

  }

  render() {
    return (
        <div>
          <h4>{ this.props.name }</h4>
          <h5>{ this.getDate } &bull; {this.props.toRead} min read</h5>
        </div>
    )
  }
}

export default ArticleDetails;
