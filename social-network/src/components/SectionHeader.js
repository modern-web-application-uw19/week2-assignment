import React from 'react';

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="sectionHeader">{this.props.title}</h2>
      </div>
    )
  }
}

export default SectionHeader;
