import React, { Component } from 'react';

class Bookmark extends Component {
    constructor(state) {
        super();
        this.toggleClass = this.toggleClass.bind(this);
        this.state = { 
            active: false,
        }
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <span 
                className={this.state.active ? 'bookmark on': 'bookmark off'} 
                onClick={this.toggleClass} 
            ></span>
        )
    }
}

export default Bookmark;