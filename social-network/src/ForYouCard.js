import React, { Component } from 'react';
import Link from './Link';
import Image from './Image';
import Audio from './Audio';
import Title from './Title';
import Description from './Description';
import Footer from './Footer';
import PropTypes from 'prop-types';
import MemberPreview from './MemberPreview';
import './ForYouCard.css';

class ForYouCard extends Component {

  static propTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    hasAudioAvailable: PropTypes.bool.isRequired,
    memberPreview: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isMediumMember: PropTypes.bool.isRequired
    }),
    postedDate: PropTypes.string.isRequired,    // "2018-03-27T07:00:00.000Z"
    minutesToRead: PropTypes.number.isRequired
  }

  render() {
    const cardStyle = {
      // backgroundColor: "red",
      borderStyle: "solid",
      borderColor: "#e7e7e7", 
      borderWidth: "1px",
      width: "400px",
      height: "250px",
      margin: "8px",
    };

    return (
      <div style={cardStyle}>
        <div className="row">
          <div className="column">
            <Image image={this.props.image}/>
          </div>
          <div className="column2">
            <Link link={this.props.link}/>
            <Audio hasAudioAvailable={this.props.hasAudioAvailable}/>
            <MemberPreview memberPreview={this.props.memberPreview}/>
            <Title title={this.props.title}/>
            <Description description={this.props.description}/>

            <div className="footer">
              <Footer author={this.props.author} postedDate={this.props.postedDate} minutesToRead={this.props.minutesToRead}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForYouCard;
