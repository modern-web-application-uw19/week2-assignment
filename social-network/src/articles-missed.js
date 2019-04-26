import React, { Component } from 'react';

export default class MissedArticle extends Component {
    constructor(props) {
        super(props);
    }

    openArticle = (event) => {
        window.open(this.props.article.link, '_blank');
    }

    render () {

        // postedDate date format '2018-03-30'
        let postedDate = '';
        let jsonDate = this.props.article.postedDate;
        let newPostedDate = jsonDate.slice(5,10);
        let monthPosted = newPostedDate.slice(0,2);
        let datePosted = newPostedDate.slice(3,6);
        

        switch (monthPosted) {
            case '01':
                postedDate = 'Jan ' + datePosted;
                break;
            case '02':
                postedDate =  'Feb ' + datePosted;
                break;
            case '03':
                postedDate =  'Mar ' + datePosted;
                break;
            case '04':
                postedDate = 'Apr ' + datePosted;
                break;
            case '05':
                postedDate = 'May ' + datePosted;
                break;
            case '06':
                postedDate = 'Jun ' + datePosted;
                break;
            case '07':
                postedDate = 'Jul ' + datePosted;
                break;
            case '08':
                postedDate = 'Aug ' + datePosted;
                break;
            case '09':
                postedDate = 'Sep ' + datePosted;
                break;
            case '10':
                postedDate = 'Oct ' + datePosted;
                break;
            case '11':
                postedDate = 'Nov ' + datePosted;
                break;
            case '12':
                postedDate = 'Dec ' + datePosted;
                break;
            default:
                postedDate = 'Archives';
        }

        

        
        return (
                <div className="m-article-wrap" onClick={this.openArticle}> 
                    <div className="article-row">
                        <div className ="article-title-img">
                                    <img alt="article" src={this.props.article.image} className='article-img' />
                        </div>
                        <div>     
                            <div className ="m-article-title-desc">       
                                    <h1 className='title'>{this.props.article.title}</h1>
                                    <p className='desc'>{this.props.article.description}</p>  
                            </div>
                            <div className="m-article-title-desc">
                                <div className="author-div">
                                    <img alt="author" className="author-img" src={this.props.article.author.image} />
                                </div>
                                <div className="author-div">
                                    <p className="author"><b>{this.props.article.author.name}</b></p>
                                    <p className="author">{postedDate} - {this.props.article.minutesToRead} min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}