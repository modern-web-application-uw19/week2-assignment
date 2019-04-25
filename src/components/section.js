import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
    render() {
        return <h1>{this.props.text}</h1>;
    }
}

Section.propTypes = {
    text: PropTypes.string
}

export default Section;