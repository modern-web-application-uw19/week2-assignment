// creates structure for Article comonent.  
// css depends if Articles calls 'yours' vs 'missed'

// Your Articles / Missed Articles
//  - Article
//      - Image
//      - Audio Available (optional feature)
//      - Member Preview (optional feature)
//      - Summary
//      - Detail

import React from 'react';
import Image from './Image.js';
import Features from './Features.js';
import Summary from './Summary/Summary.js';
import Detail from './Detail/Detail.js';

// import PropTypes from 'prop-types';


class Article extends React.Component {
    // constructor(props) {
    //   super(props);
    // }

    render() {
      return (
        <a className="article" href={this.props.article.link}>
            <h4>Article.js</h4>

            <Image article={this.props.article} />
            <Features article={this.props.article} />
            <Summary article={this.props.article} />
            <Detail article={this.props.article} />
        </a>
  
      )
    }
  }
  
  
  export default Article;