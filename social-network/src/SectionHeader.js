import React from 'react';

export default class SectionHeader extends React.Component {
  render() {
    return <div className="section-header">
      {this.props.name}
    </div>;
  }
}