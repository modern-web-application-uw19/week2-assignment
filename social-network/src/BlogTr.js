import React  from 'react';
import Article from './Article';
import AuthorBio from './AuthorBio';

export default class BlogTr extends React.Component {

    render() {
        return(
            <div className='box'>  
            <div className='article-image'>      
            <img className="article-img" src={this.props.article.image} alt="" />

            </div>
            <div className='article-grid'>       
            <Article title={this.props.article.title} description={this.props.article.description}/>
            
            <AuthorBio 
            article={this.props.article} 
            image={this.props.article.author.image} 
            postedDate={this.props.article.postedDate} 
            minutesToRead={this.props.article.minutesToRead}
            isMediumMember={this.props.article.author.isMediumMember}
            />
            </div> 
            </div>    
        );
    }

}