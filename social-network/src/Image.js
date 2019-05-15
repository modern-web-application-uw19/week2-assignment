import React, {Component} from "react";
import PropTypes from 'prop-types';

class Image extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
  }

  render() {
    const imageStyle = {
      width: "50%"
    };

    return (
      <div style={imageStyle}>
        <img src={this.props.image} style={imageStyle} alt="article"/>
      </div>
    )
  }
}

export default Image;
