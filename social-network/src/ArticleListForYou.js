import React from 'react';
import yourArticles from './your-articles.json';
import ArticleItem from './ArticleItem.js';


class ArticleListForYou extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [
                'test a',
                'test b'
            ]
        };

    }

    render() {

        //const listItems = this.state.articles.map(function(listItem) {
        const listItems = yourArticles
            .map((d, k) => <ArticleItem data={d} key={k} orientation="vertical" />);
        console.log(listItems);

        return (
            <div>
                <div className="section-header">
                    <h3>For you</h3>
                </div>
                <div className="container">
                    {listItems}
                </div>
            </div>);
    }
}

export default ArticleListForYou;