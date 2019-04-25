import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faVolumeUp as fasVolumeUp } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types';

export default class ArticleCard extends React.Component {
    static propTypes = {
        article : PropTypes.object,
        imgTop : PropTypes.bool
    }

    showMetaData(props) {        
        if (props.imgTop === false) {
            return(
                <div>
                    {props.article.hasAudioAvailable && <FontAwesomeIcon icon={fasVolumeUp} style={{display: "block", marginRight: 4, color: "gray", float: "left", position: "relative"}}/>}
                    {props.article.hasAudioAvailable && <Card.Text> Audio available</Card.Text>}
                    {props.article.memberPreview && <FontAwesomeIcon icon={fasStar} style={{display: "block", color: "gray", float: "right", position: "relative", top: "-60%"}}/>}
                </div>
            );
        }
        else {
            return(
                <div>
                    {props.article.memberPreview && <FontAwesomeIcon icon={fasStar} style={{display: "block", margin: 2, color: "gray", float: "left"}}/>}
                    {props.article.memberPreview && <Card.Text style={{color : "gray"}}>Member Preview</Card.Text>}
                </div>
            )
        }
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

        const forYouContentStyle= {
            width: 15 + 'rem',
            height: 15 + 'rem',
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
            height: 10 + 'rem',
            display: 'flex',
            flexDirection: 'column'
        }

        const missingContentStyle= {
            width: 25 + 'rem', 
            height: 18 + 'rem',           
            display: 'flex',
            flexDirection: 'column'
        }
        
        return (            
            <div id="ArticleCard">
                
                <Card style={this.props.imgTop ? missingStyle : forYouStyle}>
                    <Card.Img style={this.props.imgTop ? missingImgStyle : forYouImgStyle} src={this.props.article.image} />
                    <Card.Body style={this.props.imgTop ? missingBodyStyle : forYouBodyStyle}>
                    {this.showMetaData(this.props)}
                    <div style={this.props.imgTop ? missingContentStyle : forYouContentStyle}>
                        <Card.Title>{this.props.article.title}</Card.Title>                       
                        <Card.Text>
                            {this.props.article.description}
                        </Card.Text>
                    </div>
                    <div>
                        <Image src={this.props.article.author.image} fluid thumbnail roundedCircle style={{float: "left", position: "relative"}}/>                        
                        <Card.Text>
                            {this.props.article.author.name}
                        </Card.Text>
                        <Card.Text>
                            {date.toLocaleString('en-us', { month: 'short'})} {date.getDate()} . {this.props.article.minutesToRead} min read
                        </Card.Text>
                        <FontAwesomeIcon icon={farBookmark} style={{float: "right", position: "relative", top: "-50%"}}/>
                    </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}