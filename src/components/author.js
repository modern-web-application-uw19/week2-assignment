import React, { Component } from 'react';

class Author extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, pic, date, length} = this.props; 
        return (
            <div className="card">
                <img src={this.props.cardPic}></img>
                <div className="cardTitle">{this.props.title}</div>
                <div className="cardBlurb">{this.props.blurb}</div>
                <div className="authorInfo"><Author name="" pic="" date="" length=""></Author></div>
            </div>
        )
    }
}

export default Author;
