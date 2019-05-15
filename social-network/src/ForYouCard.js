import React, { Component } from 'react';
import Link from './Link';
import Image from './Image';
import Audio from './Audio';
import Title from './Title';
import Description from './Description';
import Footer from './Footer';
import PropTypes from 'prop-types';

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
      backgroundColor: "red",
      width: "80%"
    };

    return (
      <div style={cardStyle}>
        <Link link={this.props.link}/>
        <Image image={this.props.image}/>
        <Audio hasAudioAvailable={this.props.hasAudioAvailable}/>
        <p>memberPreview: {this.props.memberPreview.toString()}</p>
        <Title title={this.props.title}/>
        <Description description={this.props.description}/>
        <Footer author={this.props.author} postedDate={this.props.postedDate} minutesToRead={this.props.minutesToRead}/>
      </div>
    );
  }
}

export default ForYouCard;
