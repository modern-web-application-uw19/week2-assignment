// yourArticles.js
import React from 'react';
import yourArticlesJson from './your-articles.json';

class yourArticlesComp extends React.Component {
  
    render() {
        const articles = [];
        for (var i=0; i < yourArticlesJson.length; i++) {
          articles.push(yourArticlesJson[i]);
        }
        const articlesMod = articles.map(array => { 
          array = { ...array, postedDate: array.postedDate.substring(0, 10) };
          return array;
        });

        function Articles(props) {  
          const headline = <h4 class='Articles-headline'>For you</h4>;
          const content = props.articles.map((articles) =>
            <div key={articles.title} class='YourArticles-content'>
             <a href={articles.link} target='_new' class='Articles-a'><img src={articles.image} class='YourArticles-img' alt='articles'></img></a>
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
<div>
                <Articles articles={articlesMod} />
             
</div>
        );
    }
}// end yourArticlesComp

export default yourArticlesComp;