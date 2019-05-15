import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Description;
