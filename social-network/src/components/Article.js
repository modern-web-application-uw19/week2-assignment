import React from 'react';
import './Article.css'
import ArticleImage from './ArticleImage';
import Summary from './Summary';
import DetailBlock from './DetailBlock';
import './ArticleImage.css';


class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`article-grid__container-${this.props.articleType}`}>
        <div className={ `article d-flex flex-${this.props.articleType}` }>
          <div className={ `article-image_wrapper align-items-stretch p-0` }>
            <ArticleImage src={this.props.article.image} title={this.props.article.title} />
          </div>
          <div className={`d-flex flex-column justify-content-between p-3`}>
            
            <Summary article={ this.props.article }/>
            <DetailBlock article={ this.props.article } />
          </div>
        </div>
      </div>
    )
  }
}

export default Article;