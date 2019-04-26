import React from 'react';
import PropTypes from 'prop-types';

export default class ArticleItem extends React.Component {
    
    static propTypes = {
        article: PropTypes.object
    }

    render() {
        return (
            // <img source={this.props.article.image} />
            <h1>{this.props.article.title}</h1>
            // <p>{this.props.article.description}</p>
        );
    }
}