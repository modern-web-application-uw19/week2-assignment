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
import './Article.css'


// import PropTypes from 'prop-types';


class Article extends React.Component {


    render() {
      const type = this.props.type;
      console.log(this.props.type);
      return (
        <a className={(type==="your-articles" ? "article main-article" : "article sub-article")} href={this.props.article.link}>

            <Image article={this.props.article} type={type}
            />
            <div className={(type==="your-articles" ? "article-info main-article" : "article-info sub-article")}
            >
              <Features article={this.props.article} />
              <Summary article={this.props.article} type={type}/>
              <Detail article={this.props.article} />
            </div>
        </a>
  
      )
    }
  }
  
  
  export default Article;