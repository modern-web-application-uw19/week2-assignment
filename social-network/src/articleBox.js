import React from 'react';
import Article from './Article.js';
import PropTypes from 'prop-types';
import {articleProps} from './articleProps.js';


class ArticleBox extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        articles: PropTypes.arrayOf(articleProps).isRequired
    }
    render(){
        const {title, articles, className} = this.props;
        return(   
            <div className={`ArticleBox ${className}`}>
                <h2>{title}</h2>
                <div>
                    {articles.map((article, idx) => <Article article={article} key={idx} />)} 
                </div>
            </div>
        );
    }
}

 export default ArticleBox;