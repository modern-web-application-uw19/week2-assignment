import React from 'react';
import './Avatar.css';
import halo from '../assets/halo.svg';
import PropTypes from 'prop-types';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="avatar">
        <img src={this.props.src}/>
        <div className={this.props.isMember ? "member-avatar" : "d-none" }>
          <img src={halo} alt="Medium Member"/>
        </div>
      </div>

    )
  }
}

Avatar.propTypes = {
  src: PropTypes.string,
  isMember: PropTypes.bool
}

export default Avatar;