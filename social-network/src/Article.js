import React from 'react';
import {articleProps} from './articleProps.js'

class Article extends React.Component {
    static propTypes = {
        article: articleProps
    }

    render() {
        const {article} = this.props;
        return (
            <div className="boxesRow">
                <div className="boxes">
                    <img className="articleImage" src={article.image} alt={article.title}></img>
                    <div className="articleContent">
                        <div>{article.hasAudioAvailable ? ("Has Audio"): ("No Audio")}</div>
                        <div className="articleTitle">{article.title}</div>
                        <div className="articleDes">{article.description}</div>
                        <div className="authorContainer">
                        <div className="authorImage"><img src={article.author.image} alt={article.author.name}></img></div>
                        <div>
                            <div className="authorName">{article.author.name}</div>
                            <div>{article.memberPreview ? ("Preview Available"): null}</div>
                            <div>Reading Time: {article.minutesToRead} minutes</div>
                        </div>
                        <div className="bookMark">BM</div></div>
                    </div>
                </div>
            </div>
        );

    }  
}

export default Article;