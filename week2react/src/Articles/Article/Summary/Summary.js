// Summary
//  - Title
//  - Description

import React from 'react';
import './Summary.css'
// import PropTypes from 'prop-types';

class Summary extends React.Component {

    render() {
      let type = this.props.type;
      // if (type==="your-articles"){
      //   type = "main-article";
      //   // console.log (type);
      // } else if(type === "missed-articles") {
      //   type = "sub-article";
      //   console.log(type)
      // };

      return (
        <div className = {(type==="your-articles" ? "summary main-article" : "summary sub-article")}>
          <h3 className="title">
            {this.props.article.title}
            
          </h3>
          <p className={"description"}>
            {this.props.article.description}
          </p>
        </div>
      );
    }

  }
  export default Summary;