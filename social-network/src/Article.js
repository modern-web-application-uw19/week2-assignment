import React  from 'react';
import PropTypes from 'prop-types';

export default class Article extends React.Component {

render() {
     return(
    
        <div className="article-details">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
        </div>
    );
}

}

Article.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string
};