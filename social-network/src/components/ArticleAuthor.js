import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class AuthorArticle extends React.Component {
    static propTypes = {
        author: PropTypes.object,
        postedDate: PropTypes.string,
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Image src={this.props.author.image} roundedCircle></Image>

                    </Col>
                    <Col>
                        <div>
                            <div>{this.props.author.name}</div>
                            <div>{this.props.postedDate}</div>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}