import React, { Component } from 'react';
import yourArticle from './your-articles.json';
import YourArticle from './YourArticle'

class YourArticles extends Component {
    render () {
        return (
            <div>
                {yourArticle.map((article, idx) => {
                    return <YourArticle post={article} key={`post-list-key ${idx}`}/>
                })}
            </div>
        )
    }
}

export default YourArticles;
 

