import React, { Component } from "react";
import Meta from "./Meta";
import yourArticles from "./_data/your-articles.json";

class CardFor extends Component {
  constructor() {
    super();
    this.state = {
      yourArticles
    };
  }

  render() {
    return this.state.yourArticles.map((article, idx) => (
      <div className="card" key={idx}>
        <div className="image-holder">
          <img src={article.image} alt={article.title} />
        </div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <div className="metadata">
        <span>
          <Meta article={article} key={idx} />
        </span>
        <span>{/*article.postedDate.toDateString()   Why won't this work? What's the point of writing HTML in javascript if I can't use javascript?*/}</span>
        <span>{article.minutesToRead} min read</span>
        <button>
          <span className="offscreen">Bookmark</span>
          </button>
          </div>
      </div>
    ));
  }
}
export default CardFor;
