import React from 'react';
import missedArticles from './missed-articles.json';
import ArticleItem from './ArticleItem.js';


class ArticleListMissed extends React.Component {
    render() {

        //const listItems = this.state.articles.map(function(listItem) {
        const listItems = missedArticles
            .map((d, k) => <ArticleItem data={d} key={k} orientation="horizontal" />);
        console.log(listItems);

        return (
            <div>
                <div className="section-header">
                    <h3>In case you missed it</h3>
                </div>
                <div className="container">
                    {listItems}
                </div>
            </div>);
    }
}

export default ArticleListMissed;