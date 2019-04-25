import React, { Component } from 'react';
import './App.css';
import ArticleListForYou from './ArticleListForYou';
import ArticleListMissed from './ArticleListMissed';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ArticleListForYou />
                <br />
                <ArticleListMissed />
            </div>
        );
    }
}

export default App;
