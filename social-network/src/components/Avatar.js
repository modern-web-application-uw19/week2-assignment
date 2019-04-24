import React from 'react';
import './Avatar.css';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="avatar">
        <img className={this.props.isMember ? "member-avatar" : "" } src={this.props.src}/>
      </div>
    )
  }
}

export default Avatar;