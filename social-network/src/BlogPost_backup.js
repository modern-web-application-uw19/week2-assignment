import React  from 'react';
import missedArticles_data from './_data/missed-articles.json';
import yourArticle_data from './_data/your-articles.json';
import Article from './Article';
import AuthorBio from './AuthorBio';
import ImageTd from './ImageTd';
import BlogTr from './BlogTr';


export default class BlogPost extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            yourArticles: yourArticle_data,
            missedArticles: missedArticles_data
        }
    }

    render() {
        const yourArticles = this.state.yourArticles
        .map((article, idx) => <Article title={article.title} image={article.image} description={article.description} key={idx}/>
            );
        
        const yourArticles_img = this.state.yourArticles
        .map((article, idx) => <ImageTd image={article.image} key={idx}/>);
        
        const yourArticles_auth = this.state.yourArticles
        .map((article, idx) => <AuthorBio name={article.author.name} image={article.author.image} key={idx}/>
            );                    

        const missedArticles = this.state.missedArticles
        .map((article, idx) => <Article title={article.title} image={article.image} description={article.description} key={idx}/>);      
       
       const missedArticles_img = this.state.missedArticles
        .map((article, idx) => <ImageTd image={article.image} key={idx}/>);
        
        const missedArticles_auth = this.state.missedArticles
        .map((article, idx) => <AuthorBio name={article.author.name} image={article.author.image} key={idx}/>
        ); 

        return (
            <div className="App">

            <table>
            <tr>
            {yourArticles}
            {yourArticles_auth}
            </tr>
            <tr>
            {missedArticles}
            {missedArticles_auth}
            </tr>
            </table>

            </div>


        );
    }

}