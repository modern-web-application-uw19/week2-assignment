import React from 'react';
import ArticleImage from './ArticleImage';
import ArticleFeatures from './ArticleFeatures';
import Summary from './Summary';
import DetailBlock from './DetailBlock';
import './ArticleImage.css';


class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ `article d-flex flex-${this.props.articleType} col-md-6` }>
        <div className={ `align-items-stretch col-6` }>
          <ArticleImage src={this.props.article.image} title={this.props.article.title} />
        </div>
        <div className={`d-flex flex-column col-6`}>
          <ArticleFeatures hasAudioAvailable={this.props.article.hasAudioAvailable} isMemberPreview={this.props.article.memberPreview} />
          <Summary title={ this.props.article.title } description={ this.props.article.description }/>
          <DetailBlock article={ this.props.article } />
        </div>
      </div>
    )
  }
}

export default Article;