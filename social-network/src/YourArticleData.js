import React from 'react';
import YourArticles from './your-articles.json';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'
import './ArticleData.css';


function YourArticleData({ index }) {
  return (
    <div className='yourArticleWrapper'>
      <Image src={YourArticles[index]['image']} className='yourArticleImg' />
      <h1 className='yourArticleTitle'>{YourArticles[index]['title']}</h1>
      <p className='yourArticleDesc'>
        {YourArticles[index]['description']}
      </p>
      <Image src={YourArticles[index]['author']['image']} roundedCircle className='yourAuthorImg'/>
      <div className='yourArticleInfo'>
        <h2 className='yourAuthorName'>{YourArticles[index]['author']['name']}</h2>
        <p className='yourArticleDetails'>
          {YourArticles[index]['postedDate']} {YourArticles[index]['minutesToRead']} min to read
        </p>
      </div>
    </div>
  );
}

YourArticleData.propTypes = {
  index: PropTypes.number
}

export default YourArticleData;
