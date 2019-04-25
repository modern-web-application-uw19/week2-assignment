import React, { Component } from 'react';
import PostData from '../data/missed-articles.json';
import Author from './Author';
import '../styles/author.css';
import '../styles/MissedPosts.css';


class PostList extends Component {

  render() {
    return (
      <ul>
        
        {PostData.map((postDetail, index)=>{
            return<li key={index} className="grid">
            <div className="MissedCard">
                <img src={postDetail.image} alt="img" className="MissedCardImage"></img>
                <div className="MissedCardContent">
                  <h4>{postDetail.title}</h4>
                  <p>{postDetail.description}</p>
{/*                 
                  <a href={postDetail.link}>link text</a> */}
                  <Author
                  image={postDetail.author.image}
                  name={postDetail.author.name}
                  postedDate={postDetail.postedDate} 
                  minutesToRead={postDetail.minutesToRead}
                />
                  </div>
                  </div>
                </li>
        })}
       
      </ul>
    );
  }
}

export default PostList;
