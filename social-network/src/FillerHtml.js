import React  from 'react';

export default class FillerHtml extends React.Component {

render() {
     return(
       <div>
         <br />
         <h2 align="left">{this.props.text}</h2>
         <hr />
         
       </div>
    );
}

}