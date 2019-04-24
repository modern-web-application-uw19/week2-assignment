import React from 'react';
import PropTypes from 'prop-types';

export default class SectionHeader extends React.Component {
  render() {
    return <div className="section-header">
      <h3>
        {this.props.name}
      </h3>
    </div>;
  }
}

SectionHeader.propTypes = {
  name: PropTypes.string.isRequired
};