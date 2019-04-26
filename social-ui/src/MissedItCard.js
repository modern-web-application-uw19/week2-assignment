import React, { Component } from "react";
import Meta from "./Meta";
import missedArticles from './_data/missed-articles.json';


class CardMissed extends Component {
    constructor ()
    {
      super();
      this.state={
        missedArticles,
      }
    }


    render() {
      return this.state.missedArticles.map((article, idx) => (
        <div className="card" key={idx}>
          <img src={article.image} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <span>
            <Meta article={article} key={idx} />
          </span>
          <span>{/*article.postedDate.toDateString()   Why won't this work? What's the point of writing HTML in javascript if I can't use javascript?*/}</span>
          <span>{article.minutesToRead} min read</span>
          <button>
            <span className="offscreen">Bookmark</span>
          </button>
        </div>
      ));
    }
}
  export default CardMissed;