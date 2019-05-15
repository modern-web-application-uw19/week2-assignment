import React, { Component } from 'react';

export default class Date extends Component {

  // componentDidMount() {
  //   var date = new Date().getDate(); //Current Date
    // "ERROR: getMonth() IS NOT A FUNCTION: "
  //   var month = new Date().getMonth() + 1; //Current Month
  // }
  
  render() {
    const myDate = new Date();
    console.log(myDate);

    // "ERROR: getMonth() IS NOT A FUNCTION: "
    // const month = myDate.getMonth();
    // const day = myDate.getDate();
    // const monthNames = ["January", "February", "March", "April", "May", "June", 
    //                     "July", "August", "September", "October", "November", "December"];
    // const day = new Date(this.props.postedDate).getDate();
    // const month = new Date(this.props.postedDate).getMonth();
    // const date = new Date(this.props.postedDate);
    // console.log(date);
    // "ERROR: getMonth() IS NOT A FUNCTION: "
    // const month = monthNames[date.getMonth()];
    // const day = date.getDate();

    return (
      <div>
        {/* <p>{month} {day}</p> */}
        <p>{this.props.postedDate}</p>
      </div>
    );
  }
}
