import React  from 'react';

export default class Article extends React.Component {

render() {
     return(
    
        <div className="article-details">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
        </div>
    );
}

}