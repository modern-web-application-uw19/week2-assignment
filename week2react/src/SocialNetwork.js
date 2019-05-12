import React from 'react';
import Articles from './Articles/Articles.js';
import './SocialNetwork.css'
import yourArticles from  './your-articles.json';
import missedArticles from  './missed-articles.json';

class SocialNetwork extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         yourArticles: [],
    //         missedArticles: []
    //     };
    // }

    // App Structure:
    // SocialNetwork
    //  - Articles (yours)
    //  - Articles (missed)

    // Your Articles / Missed Articles
    //  - Article
    //      - Image
    //      - Audio Available (optional)
    //      - Member Preview (optional)
    //      - Summary
    //      - Detail

    // Summary
    //  - Title
    //  - Description

    // Detail
    //  - Avatar
    //     - Medium Member Highlight (optional)
    //  - Author
    //  - Posted Date (Month Date)
    //  - Minutes to Read
    //  - Bookmark


    render() {
        return (
            <div className="social-network">

                <Articles articles={yourArticles} title="For you" type="your-articles"/>
                <Articles articles={missedArticles} title="In case you missed it" type="missed-articles"/>

            </div>
        );
    }
}

export default SocialNetwork;

                // <Articles type='your' title="For you" articles={yourArticles} />
                // <Articles type='missed' title="In case you missed it" articles={missedArticles} />