import React from 'react';
// import PropTypes from 'prop-types';

class Image extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
  

    render() {
      return (
        <img className="image" 
          src={this.props.article.image} 
          alt={this.props.article.title}
          height="200"
          width="200" 
        />
        
      )
    }
  }

  export default Image;