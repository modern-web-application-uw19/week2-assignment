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
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
      <div className="">
          <p>Article.js</p>
          <Image />
          <Features />
          <Summary />
          <Detail />
      </div>
  
      )
    }
  }
  
  
  export default Article;