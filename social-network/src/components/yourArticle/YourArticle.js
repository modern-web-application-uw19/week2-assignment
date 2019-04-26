import React from 'react';
import PropTypes from 'prop-types';
import AuthorArticle from '../ArticleAuthor';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

export default class YourArticle extends React.Component {
    static propTypes = {
        article: PropTypes.object
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <div>
                            <Image src={this.props.article.image} rounded width="150" height="100" alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div>
                            <div>{this.props.article.title}</div>
                            <div>{this.props.article.description}</div>
                            <div><AuthorArticle author={this.props.article.author} postedDate={this.props.article.postedDate} /></div>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}