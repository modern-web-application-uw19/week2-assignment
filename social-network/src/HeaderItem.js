import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default class HeaderItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key : 'For You',
        };
    }

    render() {
        return (
            <Tabs
                id          = "ForYou"
                activateKey = {this.state.key}
                onSelect    = {key => this.setState( { key} )}
            >
                <Tab
                    eventkey    = "ForYou"
                    title       = "ForYou"
                >                    
                </Tab>             
            </Tabs>
        );
    }
}