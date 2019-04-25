import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import yourArticles from './_data/your-articles.json';
import missedArticles from './_data/missed-articles.json';

class SocialNetwork extends Component {

  render() {
    const yours = yourArticles.map((article, index) => <Article article={article} key={index} />);
    const missed = missedArticles.map((article, index) => <Article article={article} key={index} />);
    return (
      <div id="articles">
        <h1>
		  <span>For you</span>
		</h1>
        <div id="yourArticles" class="allArticles">{yours}</div>
        <h1>
		  <span>In case you missed it</span>
		</h1>
        <div id="missedArticles" class="allArticles">{missed}</div>
      </div>
    );
  }
}

Article.propTypes = {
    yours: PropTypes.object,
    missed: PropTypes.object
}

export default SocialNetwork;
