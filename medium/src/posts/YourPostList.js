import React, { Component } from 'react';
import PostData from '../data/your-articles.json';
import Author from './Author';

class PostList extends Component {
  render() {
    return (
      <div >
        <h3>For you</h3>
        {PostData.map((postDetail, index)=>{
            return<div>
                <img src={postDetail.image} alt="img"></img>
                <h2>{postDetail.title}</h2>
                <p>{postDetail.description}</p>
                
                <a href={postDetail.link}>link text</a>
                <Author
                  image={postDetail.author.image}
                  name={postDetail.author.name}
                  postedDate={postDetail.postedDate}
                  minutesToRead={postDetail.minutesToRead}
                />
                </div>
        })}
       
      </div>
    );
  }
}

export default PostList;
