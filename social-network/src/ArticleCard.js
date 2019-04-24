import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

export default class ArticleCard extends React.Component {
    static propTypes = {
        article : PropTypes.object,
        imgTop : PropTypes.bool
    }

    render() {
        const date = new Date(this.props.article.postedDate);
        const forYouStyle= {
            width: 39 + 'rem',
            height: 20 + 'rem',
            marginTop:'2rem',
            marginLeft:'2rem',
            display: 'flex',
            flexDirection: "row"
        };

        const forYouImgStyle= {
            width : 15 + 'rem', 
            objectFit: 'cover'
        }

        const forYouBodyStyle= {
            width: 15 + 'rem',
            display: 'flex',
            flexDirection: 'column'
        }

        const missingStyle= {
            width: 25 + 'rem',
            height: 22 + 'rem',
            marginTop:'2rem',
            marginLeft:'2rem',
            display: 'flex',
            flexDirection: "column"
        }

        const missingImgStyle= {
            width: 25 + 'rem',
            height: 7 + 'rem',
            objectFit: 'cover'
        }

        const missingBodyStyle= {
            width: 25 + 'rem',            
        }
        
        return (            
            <div id="ArticleCard">
                
                <Card style={this.props.imgTop ? missingStyle : forYouStyle}>
                    <Card.Img style={this.props.imgTop ? missingImgStyle : forYouImgStyle} src={this.props.article.image} />
                    <Card.Body style={this.props.imgTop ? missingBodyStyle : forYouBodyStyle}>
                    <Card.Body>                        
                        <Card.Title>{this.props.article.title}</Card.Title>                       
                        <Card.Text>
                            {this.props.article.description}
                        </Card.Text>
                    </Card.Body>
                    <div>
                        <Image src={this.props.article.author.image} fluid thumbnail roundedCircle style={{float: "left"}}/>                        
                        <Card.Text>
                            {this.props.article.author.name}
                        </Card.Text>
                        <Card.Text>
                            {date.toLocaleString('en-us', { month: 'short'})} {date.getDate()} . {this.props.article.minutesToRead} min read
                        </Card.Text>                        
                    </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}