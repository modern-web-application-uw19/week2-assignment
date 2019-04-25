import React from 'react';
import './Avatar.css';
import halo from '../assets/halo.svg';

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

export default Avatar;