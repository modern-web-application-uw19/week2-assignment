import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class Author extends React.Component {
    static propTypes = {
        author: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            isMediumMember: PropTypes.bool
        }).isRequired,
        postedDate: PropTypes.string.isRequired,
        minutesToRead: PropTypes.number.isRequired
    }

    render() {
        return (
            <div>
                <span>
                    <img src={this.props.author.image} className="author-image" alt={this.props.author.name}/>
                </span>
                <span>
                    <div className="b">{this.props.author.name}</div>
                    <div>
                        <span><Moment format="MMM D">{this.props.postedDate}</Moment></span>
                        <span>&nbsp;&#183;&nbsp;</span>
                        <span>{this.props.minutesToRead} min read</span>
                    </div>
                </span>
            </div>
        );
    }
}

export default Author;
