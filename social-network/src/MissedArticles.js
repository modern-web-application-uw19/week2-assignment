import React, { Component } from 'react';
import missedArticle from './missed-articles.json';
import YourArticle from './YourArticle'

class YourArticles extends Component {
    render () {
        return (
            <div>
                {missedArticle.map((article, idx) => {
                    return <YourArticle post={article} key={`post-list-key ${idx}`}/>
                })}
            </div>
        )
    }
}

export default YourArticles;
 

