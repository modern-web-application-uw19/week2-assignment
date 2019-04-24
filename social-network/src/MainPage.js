import React from 'react';
import ForYouSection from './ForYouSection';
import MissedSection from './MissedSection';

export default class MainPage extends React.Component {
   render() {
        return(
            <div id="MainPage">
                <ForYouSection />
                <MissedSection />  
            </div>
       );
   }
}