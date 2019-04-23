import React, { Component } from 'react';
import PostData from '../data/missed-articles.json';
import '../styles/author.css';

class PostList extends Component {
  render() {
    return (
      <div >
        {/* <h4>In case you missed it</h4> */}
        {PostData.map((postDetail, index)=>{
            return<div className="Columns">
            <div className="PostCard">
                <img src={postDetail.image} alt="img" className="PostCardImage"></img>
                <div>
                  <h1>{postDetail.title}</h1>
                  <p>{postDetail.description}</p>
                
                  <a href={postDetail.link}>link text</a>
                  <div>
                      <p>{postDetail.author.name}</p>
                      <img src={postDetail.author.image} alt="img"></img>
                  </div>
                  </div>
                  </div>
                </div>
        })}
       
      </div>
    );
  }
}

export default PostList;
