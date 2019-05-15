import React from 'react';
import PropTypes from 'prop-types';
import './AuthorBio.css'

class AuthorBio extends React.Component {

  static propTypes = {
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isMediumMember: PropTypes.bool.isRequired
    }),
  }

  indicateMediumMember (flag) {
    if (flag) {
      return <h3>_____</h3>
    } else {
      return null
    }
  }

  render() {
    const authorBioStyle = {
      backgroundColor: "purple",
      width: "80%"
    }
 
    // const authImageStyle = {
    //   width: "5px",
    //   height: "5px"
    //   // float: "left"
    // }
    
    return (
      <div style={authorBioStyle}>
        {this.indicateMediumMember(this.props.author.isMediumMember)}
        <div className="authImage">
          <img src={this.props.author.image} alt="author"/>
        </div>
        <p className="authName">{this.props.author.name}</p>
      </div>
    );
  }

}

export default AuthorBio;