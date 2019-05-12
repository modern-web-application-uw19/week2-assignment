// hosts article components
// calls specific css for 'your' vs 'missed' articles

    // called from SocialNetwork.js
    //  - Articles (yours)
    //  - Articles (missed)

import React from 'react';
import Article from './Article/Article.js';
import './Articles.css'

//import PropTypes from 'prop-types';

class Articles extends React.Component {

  render() {
    return (
        <div className="main-articles">
            <h3 className="qqq">{this.props.title}</h3>
            <div className="articles">
                {this.props.articles
                    .map((article, index) => (
                        <Article  
                            article={article} 
                            key = {index}
                            type ={this.props.type}
                            className={this.props.type}
                        />
                ))}
            </div>
            

        </div>
    )
  }
}

// <Article />

export default Articles;