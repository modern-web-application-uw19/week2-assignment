import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ArticleData.css';
import './Articles.css';
import YourArticleData from './YourArticleData';
import MissedArticleData from './MissedArticleData';

class Articles extends Component {

  render() {

    return (
      <div className='container'>
        <h1 className='articleSectionHeader'>For you</h1>
        <div className='articlesContainer'>
          <div className='yourArticles'>
            <YourArticleData index={0} className='yourArticle1' />
            <YourArticleData index={1} className='yourArticle2' />
            <YourArticleData index={2} className='yourArticle3' />
            <YourArticleData index={3} className='yourArticle4' />
          </div>

          <h1 className='articleSectionHeader'>In case you missed it</h1>
          <div className='missedArticles'>
            <MissedArticleData index={0} />
            <MissedArticleData index={1} />
            <MissedArticleData index={2} />
          </div>
        </div>
      </div>
    );
  }


}

Articles.propTypes = {
  YourArticleData: PropTypes.object,
  MissedArticleData: PropTypes.object
};


export default Articles;
