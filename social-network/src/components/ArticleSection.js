import React from 'react';
import SectionHeader from './SectionHeader';
import Article from './Article';

class ArticleSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="article-block">
        <SectionHeader title={ this.props.sectionTitle }/>
        <div className={`article-grid row d-flex flex-row flex-wrap`}>
          {this.props.articles.map((article, index) => (
            <Article 
              article={article} 
              articleType={this.props.articleType}
              key={ index } 
            /> 
          ))}
        </div>
      </div>
    )
  }
}

export default ArticleSection;