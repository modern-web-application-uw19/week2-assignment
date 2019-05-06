import React from 'react';
import Articles from './Articles/Articles.js';
import   './your-articles.json';
import   './missed-articles.json';

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
            <div>

                <Articles />

            </div>
        );
    }
}

export default SocialNetwork;

                // <Articles type='your' title="For you" articles={yourArticles} />
                // <Articles type='missed' title="In case you missed it" articles={missedArticles} />