import React from 'react';
// import PropTypes from 'prop-types';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';


export default class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articleGroupYours: yourArticles,
            articleGroupMissed: missedArticles
        };
    }
    
    // static propTypes = {
    //     todo: PropTypes.bool
    // }

    render() {
        const articlesYours = this.state.articleGroupYours.map( (art, idx) =>
        <ArticleItem yourArticle={art} key={idx} />     
        );
        const articlesMissed = this.state.articleGroupMissed.map( (art, idx) => 
        <ArticleItem yourArticle={art} key={idx} />
        );
        return (
            <div>
                <article>
                    {articlesYours}
                </article>
            </div>

        );        
    }
}