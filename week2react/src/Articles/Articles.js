// hosts article components
// calls specific css for 'your' vs 'missed' articles

    // called from SocialNetwork.js
    //  - Articles (yours)
    //  - Articles (missed)

import React from 'react';
import Article from './Article/Article.js';
//import PropTypes from 'prop-types';

class Articles extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  //type = {this.props.type};

  render() {
    return (
        <div className="articles">
            <h1>Articles.js</h1>
            <h2>{this.props.title}</h2>
            <div className="">
                {this.props.articles
                    .map((article, index) => (
                        <Article  
                            article={article} 
                            key = {index}
                        />
                ))}
            </div>
            

        </div>
    )
  }
}

// <Article />

export default Articles;