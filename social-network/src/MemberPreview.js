import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MemberPreview extends Component {

  static propTypes = {
    memberPreview: PropTypes.bool.isRequired
  }

  render() {
    const memberPreviewStyle = {
      fontSize: "9pt"
    }

    if (this.props.memberPreview) {
      return (
        <div>
          <p style={memberPreviewStyle}>* Member preview</p>
        </div>
      );
    }

    return null;
  }
}

export default MemberPreview;
