import React from 'react';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className={this.props.isMember ? "member-avatar" : "" } src={this.props.src}/>
      </div>
    )
  }
}

export default Avatar;