import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ArticleCard extends Component {
    static propTypes = {
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        authorImg: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        readTime: PropTypes.string.isRequired,
    }

    render() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const monthNum = parseInt(this.props.date.substring(5, 7));
        const month = months[monthNum - 1];
        const day = this.props.date.substring(8, 10).replace(/^0+/, '');

        return(
            <li>
                <div class="imgContainer"><img src={this.props.img} alt=""/></div>
                <div class="content">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <div class="authorContainer">
                        <div class="authorImg"><img src={this.props.authorImg} alt=""/></div>
                        <h3>{this.props.author}</h3>
                        <h4>{`${month} ${day} ∙ ${this.props.readTime} min read`}</h4>
                    </div>
                </div>
            </li>
        );
    }

}

export default ArticleCard;