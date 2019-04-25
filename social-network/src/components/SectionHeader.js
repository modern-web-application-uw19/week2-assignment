import React from 'react';
import './SectionHeader.css';
import PropTypes from 'prop-types';

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sectionHeader">
        <h2 className="sectionHeader__text">{this.props.title}</h2>
      </div>
    )
  }
}

SectionHeader.propTypes = {
  title: PropTypes.string
}

export default SectionHeader;
