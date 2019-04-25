// missedArticles.js
import React from 'react';
import missedArticlesJson from './missed-articles.json';

class missedArticlesComp extends React.Component {

    render() {
        const articles = [];
        for (var i=0; i < missedArticlesJson.length; i++) {
          articles.push(missedArticlesJson[i]);
        }
        function Articles(props) {  
          const headline = <h4 class='Articles-headline'>In case you misssed it</h4>;
          const content = props.articles.map((articles) =>
            <div key={articles.title} class='MissedArticles-content'>
             <a href={articles.link} target='_new' class='Articles-a'><img src={articles.image} class='MissedArticles-img' alt='articles'></img></a>
            <b><a href={articles.link} target='_new'>{articles.title}</a></b>
            <br></br>{articles.description}
              <p><img src={articles.author.image} class='Articles-author-img'alt='author'></img>
              {articles.author.name}
              <br></br>{articles.postedDate}
              <br></br>{articles.minutesToRead} min read</p>      
            </div>
          );
          return (
            <div>
              {headline}
              {content}
            </div>
          );
        }

        return (
                <Articles articles={articles} />
        );
    }
}// end missedArticlesComp

export default missedArticlesComp;