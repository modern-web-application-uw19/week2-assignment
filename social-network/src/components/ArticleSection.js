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
        {this.props.articles.map((article, index) => (
          <Article 
            article={article} 
            articleType={this.props.articleType}
            key={ index } 
          /> 
        ))}
      </div>
    )
  }
}

export default ArticleSection;