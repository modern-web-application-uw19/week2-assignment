import React from 'react';

import './Article.css';
import './Author';


export default class Article extends React.Component{
   
    render(){
        //console.log(this.props.indArticle);
        let months = ['Jan','Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'];
        let tmpMonth = this.props.indArticle.postedDate.substring(5,7);
        let day = this.props.indArticle.postedDate.substring(8,10);
        let month = months[Number(tmpMonth) - 1];
        return (
            <div className='indivArt'>
            <div className='articleImageDiv'>
            <img src={this.props.indArticle.image} className='articleImage' alt='myPic'/>
            </div>
            <div className='articleContentDiv'>
                <h5>{this.props.indArticle.title}</h5>
                <p>{this.props.indArticle.description}</p>
                <div className='authorDiv'>
                    <img src={this.props.indArticle.author.image} className='authorImage' alt='myPic'/>
                    <p>{this.props.indArticle.author.name}</p>
                    <p>{month} {day}</p>
                    <p>Minutes to read {this.props.indArticle.minutesToRead}</p>
                </div>
            </div>
            
            
        </div>);
    }
    
}
