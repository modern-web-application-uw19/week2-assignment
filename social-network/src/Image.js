import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Image.css';

class Image extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
  }

  render() {
    const imageStyle = {
      width: "100%",
      // height: "100%",
      float: "left",
      overflow: "hidden"
    };

    return (
      <div style={imageStyle}>
        <img src={this.props.image} style={imageStyle} alt="article"/>
      </div>
    )
  }
}

export default Image;
