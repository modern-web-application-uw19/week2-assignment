import React, { Component } from 'react';
import PostData from '../data/missed-articles.json';

class PostList extends Component {
  render() {
    return (
      <div >
        <h3>In case you missed it</h3>
        {PostData.map((postDetail, index)=>{
            return<div>
                <h1>{postDetail.title}</h1>
                <p>{postDetail.description}</p>
                <img src={postDetail.image} alt="img"></img>
                <a href={postDetail.link}>link text</a>
                <div>
                    <p>{postDetail.author.name}</p>
                    <img src={postDetail.author.image} alt="img"></img>
                </div>
                </div>
        })}
       
      </div>
    );
  }
}

export default PostList;
