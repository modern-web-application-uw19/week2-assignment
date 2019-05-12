// Detail
//  - Avatar
//     - Medium Member Highlight (optional)
//  - Author
//  - Posted Date (Month Date)
//  - Minutes to Read
//  - Bookmark

import React from 'react';
import './Detail.css'
// import PropTypes from 'prop-types';

class Detail extends React.Component {
  
    render() {
        const isMediumMember = this.props.article.author.isMediumMember;
        const postedDate = new Date(this.props.article.postedDate)
        //console.log(postedDate.getDate())
        const postedMonth = postedDate.toLocaleString('en-us', { month: 'long' });
        const postedDay = postedDate.getDate();
        //{this.props.article.postedDate.monthIndex.toString}

       return (
          <div className="detail">
            <img className= {(isMediumMember ? "avatar medium-member" : "avatar" )} 
                src ={this.props.article.author.image} alt="this.props.article.author.name"
            />
            <div className="detail-info">
                <p className="name">
                  {this.props.article.author.name}
                </p>
                <div className="posted-info">
                  <p className="posted-date">
                    {postedMonth} {postedDay} &#8226;&nbsp;
                  </p>
                  <p className="minutes-to-read">
                    {this.props.article.minutesToRead} min read
                  </p>
                </div>
            </div>
            <span className="bookmark" role="img" aria-label="bookmark">
              &#128278;
            </span>
          </div>
        );
      }
    }
  
  
  
  export default Detail;