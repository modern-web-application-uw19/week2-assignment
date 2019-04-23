import React, { Component } from 'react';
import yourArticles from './your-articles.json';
import YourArticle from './YourArticle';

class YourArticles extends Component {
    constructor(props){
        super(props);

        this.articles = yourArticles;


    }



    render() {

        const list = this.articles.map((x) => <YourArticle isCurrent={true} obj={x} />);

        return (

            <div className="grid2x2">
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
                <div className="box">
                    <div>
                        {list[3]}
                    </div>
                </div>
            </div>

        );
    }
}


export default YourArticles;
