import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Author from "./Author";


class MissedArticle extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div>
                <div className="pic">
                    <img src={this.props.obj["image"]} className="artimg"  />
                </div>
                <div className="details">
                    <p className="title">{this.props.obj["title"]}</p>
                    <p>{this.props.obj["description"]}</p>
                    <div>
                        <Author details={this.props.obj} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MissedArticle;
