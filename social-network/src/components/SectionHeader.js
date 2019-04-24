import React from 'react';
import './SectionHeader.css';

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

export default SectionHeader;
