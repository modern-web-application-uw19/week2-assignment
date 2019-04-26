import React from 'react';
import PropTypes from 'prop-types';
import bookmark from './noun_bookmark_48824.png';
import audio from './noun_Audio_830722.png';
import star from './noun_Star_7371.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default class CardMissedIt extends React.Component {

    static propTypes = {
        sectionName: PropTypes.string,
        data: PropTypes.shape({
            author: PropTypes.object,
            description: PropTypes.string,
            hasAudioAvailable: PropTypes.bool,
            image: PropTypes.string,
            link: PropTypes.string,
            memberPreview: PropTypes.bool,
            minutesToRead: PropTypes.number,
            postedDate: PropTypes.string,
            title: PropTypes.string
        })
    }

    render() {
        let monthNames = [ "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
        let date = new Date(this.props.data.postedDate);
        let month = monthNames[date.getMonth()].substring(0,3);
        let day = date.getDate();

        return (
            <Container className="cardMissedIt">
            <Col lg={12}>
              <Row>
                <img alt="cardImg" className="cardImage-MissedIt" src={this.props.data.image}/>
                <div className={(this.props.data.hasAudioAvailable ? null : "hideAudioInfo")}>
                    <img alt="audioImg" className="cardAudio" src={audio}/> {/* Audio by Mundo from the Noun Project */}
                    <p className="cardCaption">Audio available</p>
                </div>
                <div className={(this.props.data.memberPreview ? null : "hideMemberPreview")}>
                    <img alt="starImg" className="cardStarMissedIt" src={star}/> {/* Star by Valentin from the Noun Project */}
                    <p className="cardCaption memberPreview">Member preview</p>
                </div>
                <div>
                  <a className="cardTitle" href={this.props.data.link} >{this.props.data.title}</a>
                </div>
              </Row>
              <Row>
                <div>
                  <p className="cardDescription">{this.props.data.description}</p>
                </div>
              </Row>
              <Row className="no-flex">
                <div className="cardAuthorInfo">
                    <img alt="authorImg" className={"cardAuthorImg " + (this.props.data.author.isMediumMember ? "isMemberImg" : null)} src={this.props.data.author.image}/>
                    <img alt="bookmarkImg" className="cardBookmark inline-right" src={bookmark}/> {/* bookmark by Stano Bagin from the Noun Project */}
                    <p className="linebreak">{this.props.data.author.name} {'\n'} {month} {day} ・ {this.props.data.minutesToRead} min read</p>
                </div>   
              </Row>  
            </Col>

          </Container>
        )
    }
}