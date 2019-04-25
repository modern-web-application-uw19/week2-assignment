import React from 'react';
import mArticles from './missed-articles.json';

console.log(mArticles);

class Box2 extends React.Component {
    render() {
        return (
            <div>
                {mArticles.map((item, index)=>{
                 return <div className="mBoxes" key={index}>
                       <div>
                         <img className="mArticleImage" src={item.image}></img>
                       </div>
                       <div className="mArticleTitle">{item.title}</div>
                       <div className="mArticleDes">{item.description}</div>
                        <div className="authorContainer">
                        <div><img className="authorImage" src={item.author.image}></img></div>
                        <div className="authorName">{item.author.name}</div>
                        <div className="bookMark">BM</div></div>
                        </div>
                })}
            </div>
        );

    }  
}

export default Box2;