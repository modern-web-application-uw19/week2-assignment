import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CardDeck from 'react-bootstrap/CardDeck'

import yourArticles from './your-articles.json';
import ArticleCard from './ArticleCard';

export default class ForYouSection extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            articles : yourArticles,
            imgTop : false
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
            <div id="ForYouSection">                
                <h5 style= {{ borderBottom : "1px solid rgb(125, 125, 125)", padding: 20, width: "90%"}}>For You</h5>
                
                <CardDeck>
                    {articleCards[0]}
                    {articleCards[1]}                    
                </CardDeck>
                <CardDeck>
                    {articleCards[2]}
                    {articleCards[3]}                    
                </CardDeck>                
            </div>
        );
    }
}