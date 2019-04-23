import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  DateFormat from './Date';


class Author extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: false
        }
    }


    static propTypes = {
        details: PropTypes.object,
        id: PropTypes.string
    }

    toggleBookmark = () => {
        this.setState(prevState => {
            return {
                isSelected: !prevState.isSelected
            };
        });

    }

    render() {
        const classes = this.state.isSelected ? 'fa bookmark fa-bookmark' : 'fa bookmark fa-bookmark-o' ;
        const displayDate = new Date(this.props.details["postedDate"]);
        const dd = displayDate.toString('dd-MMM-yyyy');
        console.log(dd);
        return (

            <div>
                <div className="details">
                    <img src={this.props.details["author"]["image"]}  className="authimg" />
                    <br />
                    <i className="auth">{this.props.details["author"]["name"]}</i><br />
                    <i className="desc"><DateFormat dt={displayDate} tm={this.props.details["minutesToRead"]} /></i>
                </div>
                <div className="bm-details">
                    <i className={classes} id={this.props.id}  onClick={(event) => this.toggleBookmark()}></i>
                </div>
            </div>
        );
    }
}


export default Author;
