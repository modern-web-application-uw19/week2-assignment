import React from 'react';
import MissedArticles from './missed-articles.json';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'
import './ArticleData.css';


function MissedArticleData({ index }) {
  return (
    <div className='missedArticleWrapper'>
      <Image src={MissedArticles[index]['image']} className=' missedArticleImg' />
      <h1 className='missedArticleTitle'>{MissedArticles[index]['title']}</h1>
      <p className='missedArticleDesc'>
        {MissedArticles[index]['description']}
      </p>
      <Image src={MissedArticles[index]['author']['image']} roundedCircle className='missedAuthorImg'/>
      <div className='missedArticleInfo'>
        <h2 className='missedAuthorName'>{MissedArticles[index]['author']['name']}</h2>
        <p className='missedArticleDetails'>
          {MissedArticles[index]['postedDate']} {MissedArticles[index]['minutesToRead']} min to read
        </p>
      </div>
    </div>
  );
}

MissedArticleData.propTypes = {
  index: PropTypes.number
}

export default MissedArticleData;
