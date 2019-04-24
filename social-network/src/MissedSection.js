import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CardDeck from 'react-bootstrap/CardDeck';
import ArticleCard from './ArticleCard';

export default class MissedSection extends React.Component {
    render() {
        return(
            <div id="MissedSection">
                <Tabs id="MissedTab">
                    <Tab eventKey="Missed" title="In case you missed it"></Tab>                    
                </Tabs>
                <CardDeck>
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </CardDeck>
            </div>
        );
    }
}