import React, { Component } from 'react';
import YourArticle from './articles-yours';
import MissedArticle from './articles-missed';
import articleDataYours from './your-articles.json';
import articleDataMissed from './missed-articles.json';
import PropTypes from 'prop-types';

export default class ViewArticles extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const articleYours = articleDataYours.map((article, index) =>     
                    <YourArticle key={index} article={article} />
        );

        const articleMissed = articleDataMissed.map((article, index) => 
                    <MissedArticle key={index} article={article} />    
        );

        return (
            <div>
                <h2 className="header">For you</h2>
                        <span className="grid-yours">
                            {articleYours}
                        </span>
                <h2 className="header">In case you missed it</h2>
                        <span className="grid-missed">
                            {articleMissed}
                        </span>
            </div>
        )
        
    }
}

YourArticle.propTypes = {
    articleYours: PropTypes.object,
    articleMissed: PropTypes.object
}
