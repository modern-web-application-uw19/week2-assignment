import React, { Component } from 'react';
import missedArticles from './missed-articles.json';
import YourArticle from './YourArticle';

class MissedArticles extends Component {
    constructor(props){
        super(props);

        this.articles = missedArticles;
    }
    render() {

        const list = this.articles.map((x) => <YourArticle isCurrent={false} obj={x} />);

        return (

            <div className="grid3x1">
                <div className="box ">
                    <div>
                        {list[0]}
                    </div>
                </div>
                <div className="box ">
                    <div>
                        {list[1]}
                    </div>
                </div>
                <div className="box ">
                    <div>
                        {list[2]}
                    </div>
                </div>
            </div>

        );
    }
}


export default MissedArticles;
