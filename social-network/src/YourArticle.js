import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Author from "./Author";
import Properties from "./Properties";


class YourArticle extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        obj: PropTypes.object
    }


    nav = (link) => {
        window.open(link,"_blank");
    }

    render() {

        const c = this.props.isCurrent ? "artimg" :"artimgMiss";

        return (

            <div>
                <div className="pic">
                    <img src={this.props.obj["image"]} className={c}
                         onClick={(event) => this.nav(this.props.obj["link"])} />
                </div>
                <div className="details">
                    <Properties obj={this.props.obj} />
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

export default YourArticle;
