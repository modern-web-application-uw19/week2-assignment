import React from 'react';

import './Article.css';
import './Author';


export default class MissedArticle extends React.Component{
   
    render(){
        
        return (
            <div className='missedArticle'>
            <div className='articleImageDiv'>
            <img src={this.props.indArticle.image} className='articleImage' alt='myPic'/>
            </div>
            <div className='articleContentDiv'>
                <h5>{this.props.indArticle.title}</h5>
                <p>{this.props.indArticle.description}</p>
                <div className='authorDiv'>
                    <img src={this.props.indArticle.author.image} className='authorImage' alt='myPic'/>
                    <p>{this.props.indArticle.author.name}</p>
                    <p>{this.props.indArticle.postedDate}</p>
                    <p>Minutes to read {this.props.indArticle.minutesToRead}</p>
                </div>
            </div>
            
            
        </div>);
    }
    
}
