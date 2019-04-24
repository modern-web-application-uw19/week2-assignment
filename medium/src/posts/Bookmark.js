import React from 'react';
import '../styles/author.css';

export default class Bookmark extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
    isSelected: false
    }
 }

 toggleBookmark = () => {
 this.setState(prevState => {
 return {
    isSelected: !prevState.isSelected
 };
 });
 }
 render() {

 // if (this.state.isSelected) {
 // return <div className="bookmark bookmark--green" onClick={this.toggleBookmark}></div>
 // }

 


 // return (
 // <div className="bookmark" onClick={this.toggleBookmark}></div>
 // )

 const classes = this.state.isSelected ? 'bookmark bookmark--green' : 'bookmark';
 return <div className={classes} onClick={this.toggleBookmark}></div>
 }
}
