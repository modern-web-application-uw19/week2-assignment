import React from 'react';

function ArticleCard(props) {
  const monList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const newArtDate = new Date(props.article.postedDate)
  const newDate = newArtDate.getDate();
  const newMonth = newArtDate.getMonth();
  let artMon = '';
    for (let i =0; i < 12; i++) {
      if (newMonth === i) {
         artMon = monList[i];
      }
    }
   const artDate = `${artMon} ${newDate}`;

  return (
    <div className="card">
      <img className="card-img" src={props.article.image} alt="cool related to article" />
      <h2 className="card-title">{props.article.title}</h2>
      <p className="card-description"><a href={props.article.link}>{props.article.description}</a></p>
      <p className="author-name">{props.article.author.name}</p>
      <img className="author-img" src={props.article.author.image} alt="author view"/>
      <p className="card-date">{artDate}</p>
      <p className="card-read">{props.article.minutesToRead} mins to read</p>
    </div>
  )
}

export default ArticleCard;