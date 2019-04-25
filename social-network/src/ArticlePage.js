import React, { Component } from 'react';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';
import Article from './Article';
import MissedArticle from './MissedArticle';

class ArticlePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            myMissedArticles: missedArticles,
            yourNewArticles: yourArticles
        };
        
    }
    render(){
        const individualArticles = this.state.yourNewArticles
        .map((a, idx)=> <Article indArticle={a} key={idx}/>);

        const missedArticles = this.state.myMissedArticles
        .map((a,idx)=><MissedArticle indArticle={a} key={idx}/>);

        return (
            <div style={{marginLeft:15+'px'}}><p>For you...</p>
            <div>{individualArticles}</div>
            <div>{missedArticles}</div>
            
            </div>

        );
        
    };
}

export default ArticlePage;