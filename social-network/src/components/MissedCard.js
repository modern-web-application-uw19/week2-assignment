import React from 'react';

function MissedCard(props) {
    const monList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const newArtDate = new Date(props.missed.postedDate)
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
      <div className="missed-card">
      <img className="missed-card-img" src={props.missed.image} alt="cool related to article" />
      <h2 className="missed-card-title">{props.missed.title}</h2>
      <a className="missed-card-description" href={props.missed.link}><p>{props.missed.description}</p></a>
      <p className="missed-author-name">{props.missed.author.name}</p>
      <img  className="missed-author-img"src={props.missed.author.image} alt="author view" />
      <p className="missed-card-date">{artDate}</p>
      <p className="missed-card-read">{props.missed.minutesToRead} mins to read</p>
    </div>
  )
}

export default MissedCard;