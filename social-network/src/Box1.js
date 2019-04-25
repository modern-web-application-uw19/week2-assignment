import React from 'react';
import YourArticles from './your-articles.json';

console.log(YourArticles);

class Box1 extends React.Component {
    render() {
        return (
            <div>
                {YourArticles.map((item, index)=>{
                 return <div className="boxes" key={index}>
                            <img className="articleImage" src={item.image} key={index}></img>
                            <div className="articleContent">
                              <div className="articleTitle">{item.title}</div>
                              <div className="articleDes">{item.description}</div>
                              <div className="authorContainer">
                                <div className="authorImage"><img src={item.author.image}></img></div>
                                <div className="authorName">{item.author.name}</div>
                                <div className="bookMark">BM</div></div>
                            </div>
                        </div>
                })}
            </div>
        );

    }  
}

export default Box1;