import React, { Component } from 'react';

class Minutes extends Component {

  render() {

    return (
      <div>
        <p>{this.props.minutes} min read</p>
      </div>
    );
  }
}

export default Minutes;
