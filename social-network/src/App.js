import React from 'react';
import ArticleContainer from './ArticleContainer';

import yourArticles from './_data/your-articles.json';
import missedArticles from './_data/missed-articles.json';

function App() {
  return (
    <div>
      <ArticleContainer className="ArticleContainer--for-you" title="For You" articles={yourArticles} />
      <ArticleContainer className="ArticleContainer--missed" title="In case you missed it" articles={missedArticles} />
    </div>
  );
}

export default App;
