import React  from 'react';
import missedArticles_data from './_data/missed-articles.json';
import yourArticle_data from './_data/your-articles.json';
import BlogTr from './BlogTr';
import FillerHtml from './FillerHtml';
import PropTypes from 'prop-types';

export default class BlogPost extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            yourArticles: yourArticle_data,
            missedArticles: missedArticles_data,
            forYou: "For You",
            missedIt: "In case you missed it"
        }
    }

    render() {
        const yourArticles = this.state.yourArticles
        .map((article, idx) => <BlogTr article={article} key={idx}/>
            );
        
       
         const missedArticles = this.state.missedArticles
        .map((article, idx) => <BlogTr article={article} key={idx}/>
            );
        
    
        return (
            <div className="App">
            <FillerHtml text={this.state.forYou}/>
            <div className='wrapper'>
            {yourArticles}
            </div>
            <FillerHtml text={this.state.missedIt}/>
            <div className='wrapper-missed'>
            {missedArticles}
            </div>
            
            </div>
        );
    }

}

BlogPost.propTypes = {
    yourArticles: PropTypes.object,
    missedArticles: PropTypes.object
};