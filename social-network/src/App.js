import React, { Component } from 'react';
import './App.css';
import MissedArticles from './MissedArticles';
import YourArticles from './YourArticles';

// class App extends React.Component {
//   constructor(props) {
//       super(props);
//         this.state ={ 
//           missedtitles: [],
//           misseddescription: [],
//           misssedimage: [],
//           missedlink: [],
//           missedauthorname: [],
//           missedauthorimage: [],
//           missedpostedDate: [],
//           missedminutesToRead: []
//         }
//   };

// //   fillarticles = () =>  {
// //   if (this.state.missedtitles.length === 0) {
// //   MissedArticles.forEach((element, index) => {
// //     this.setState(prevState => {
// //       return{
// //           missedtitles: prevState.missedtitles.concat([MissedArticles[index].title]),
// //           misseddescription: prevState.missedtitles.concat([MissedArticles[index].description]),
// //           misssedimage: prevState.missedtitles.concat([MissedArticles[index].image]),
// //           missedlink: prevState.missedtitles.concat([MissedArticles[index].link]),
// //           missedauthornmae: prevState.missedtitles.concat([MissedArticles[index].author.name]),
// //           missedauthorimage: prevState.missedtitles.concat([MissedArticles[index].author.image])

// //       }
// //     });
// //   });
// // }
// //   }

//   render (){

//   //     this.fillarticles();
//   // const missedAricleTitles = this.state.missedtitles
//   //       .map((fred, idx) => <MissedTitlesItem missedtitle = {fred} key={idx} />);
//   return (
//   <div>
//       <div className="your-articles">
        
//       </div>
//       <div className="missed-articles">
//           {missedAricleTitles}
//       </div>
//   </div>);
//   }
// }

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='your-section-style'>
          <YourArticles/>
        </div>
        <div className='missed-section-style'>
          <MissedArticles/>
        </div>
      </div>
    );
  }
}

export default App;
