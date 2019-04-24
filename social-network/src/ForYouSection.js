import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CardDeck from 'react-bootstrap/CardDeck'

import yourArticles from './your-articles.json';
import ArticleCard from './ArticleCard';

export default class ForYouSection extends React.Component {
    render() {
        console.log(yourArticles);
        return(            
            <div id="ForYouSection">                
                <Tabs id="ForYouTabs">
                    <Tab eventKey="ForYou" title="ForYou"></Tab>                    
                </Tabs>
                <CardDeck>
                    <ArticleCard />
                    <ArticleCard />
                </CardDeck>
                <CardDeck>
                    <ArticleCard />
                    <ArticleCard />
                </CardDeck>
            </div>
        );
    }
}