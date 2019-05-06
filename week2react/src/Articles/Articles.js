// hosts article components
// calls specific css for 'your' vs 'missed' articles

    // called from SocialNetwork.js
    //  - Articles (yours)
    //  - Articles (missed)

import React from 'react';
import Article from './Article/Article.js';
//import PropTypes from 'prop-types';

class Articles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="">
        <p>Articles.js</p>
        <Article />
    </div>

    )
  }
}


export default Articles;