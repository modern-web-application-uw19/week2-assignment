import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'

import missedArticles from './missed-articles.json';
import ArticleCard from './ArticleCard';

export default class MissedSection extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            articles : missedArticles,
            imgTop : true
        };
    }

    render() {        
        const articleCards = this.state.articles
                                .map((article, idx) => {
                                    return (
                                        <ArticleCard article={article} imgTop={this.state.imgTop} key={idx}/>
                                    );
                                });
        
        return(            
            <div id="MissedSection">                
                <h5 style= {{borderBottom : "1px solid rgb(125, 125, 125)", padding: 20, width: "90%"}}>In case you missed it</h5>
                
                <CardDeck>
                    {articleCards}                    
                </CardDeck>                
            </div>
        );
    }
}