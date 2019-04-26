import React from 'react';
import MissedCard from './MissedCard'
import missedData from './missed-articles.json'

class MissedArticle extends React.Component {

  render(){

    const newMissed = missedData.map(missed => <MissedCard key={missed.title} missed={missed} />)

    return (
      <div>
        <h2>In case you missed it</h2>
        <hr/>
        <div style={{display: 'flex', flexWrap: 'nowrap'}}>
          {newMissed}
        </div>
      </div>
    )
  }
}

export default MissedArticle;