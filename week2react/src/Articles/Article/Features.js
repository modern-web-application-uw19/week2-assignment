import React from 'react';
import './Features.css';
// import PropTypes from 'prop-types';

class Features extends React.Component {

   render() {
    const hasAudioAvailable = this.props.article.hasAudioAvailable;
    const hasMemberPreview = this.props.article.memberPreview;


    if (hasAudioAvailable && hasMemberPreview){
      return (
        <aside className="features">
            <span className="audio" role="img" aria-label="audio available">
            &#128266;
            Audio Available
            </span>  
            <span className="preview-audio" role="img" aria-label="member preview">
              &#9733;          
            </span>
        </aside>
      );
    } else if (hasAudioAvailable){
      return (
        <aside className="features">
            <span className="audio" role="img" aria-label="speaker">
            &#128266;
            Audio Available
            </span>  
        </aside>
      );    
    } else if (hasMemberPreview){
      return (
        <aside className="features">
          <span className="preview" role="img" aria-label="member preview">
            &#9733;
            Member Preview 
          </span>  
        </aside>
      );    
    } else {
      return (
        <div className="none"></div>
      )
    }
  }
}
  
  
export default Features;