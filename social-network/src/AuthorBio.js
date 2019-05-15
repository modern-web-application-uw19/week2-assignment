import React from 'react';
import PropTypes from 'prop-types';

class AuthorBio extends React.Component {

  static propTypes = {
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isMediumMember: PropTypes.bool.isRequired
    }),
  }
  
  render() {
    const authorBioStyle = {
      backgroundColor: "purple",
      width: "80%"
    }
    return (
      <div style={authorBioStyle}>
        <p>isMediumMember: {this.props.author.isMediumMember.toString()}</p>
        <img src={this.props.author.image} alt="author"/>
        <p>{this.props.author.name}</p>
      </div>
    );
  }

}

export default AuthorBio;