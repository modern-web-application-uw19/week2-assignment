import React from 'react';
import PropTypes from 'prop-types';
import "./AuthorImage.css";

export default class AuthorImage extends React.Component {

  static propTypes = {
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isMediumMember: PropTypes.bool.isRequired
    })
  }

  render(){

    return (
      <div className="authImage">
        <img src={this.props.author.image} alt="author"/>
      </div>
  
    )
  }
}
