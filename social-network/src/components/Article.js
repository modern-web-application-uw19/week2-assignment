import React from 'react';
import ArticleImage from './ArticleImage';
import ArticleFeatures from './ArticleFeatures';
import Summary from './Summary';
import DetailBlock from './DetailBlock';


class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.articleType }>
        <ArticleImage src={this.props.article.image} title={this.props.article.title} />
        <ArticleFeatures hasAudioAvailable={this.props.article.hasAudioAvailable} isMemberPreview={this.props.article.isMemberPreview} />
        <Summary title={ this.props.article.title } description={ this.props.article.description }/>
        <DetailBlock article={ this.props.article } />
      </div>
    )
  }
}

export default Article;
