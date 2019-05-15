import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired
  }

  render() {
    const descStyle = {
      fontSize: "8.5pt"
    }

    return (
      <div>
        <p style={descStyle}>{this.props.description}</p>
      </div>
    );
  }
}

export default Description;
