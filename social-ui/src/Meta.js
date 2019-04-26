import React, { Component } from "react";

//can't get the data to pass through I give up
class Meta extends Component {
    render() { 
        return (
            <div className='meta'>
                <img src={this.props.article} alt={this.props.name} />
                <span>{this.props.author}</span>
            </div>
        )
    }
}
  export default Meta;