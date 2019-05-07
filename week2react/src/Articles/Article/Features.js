import React from 'react';
// import PropTypes from 'prop-types';

class Features extends React.Component {
    constructor(props) {
      super(props);

    }     
    
    // featured {
    //   if ({this.props.article.hasAudioAvailable}){
    //     speakerIcon = true;
    //     hasAudioAvailable = 'Audio Available';
    //   }
    // }
   //  hasAudioAvailable={this.props.hasAudioAvailable}
   // isMediumMember={this.props.isMediumMember}

    render() {
      return (
        <aside className="features">
            <p>Features.js</p>
              //TODO create component? 
              if ({this.props.article.hasAudioAvailable}){
                
                // Speaker Icon
                <p>Audio Available</p>  
            }
            
        </aside>
  
      )
    }
  }
  
  
  export default Features;