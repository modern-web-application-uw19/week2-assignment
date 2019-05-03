import React  from 'react';
import PropTypes from 'prop-types';

export default class AuthorBio extends React.Component {

   
render() {
  
// get the date posted and format it to match screenshot
 function formatDate(date) {
        const newDate = new Date(date);
        const day = newDate.getDate();

        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const monthNum = newDate.getMonth();
        const month = months[monthNum];

        return <span>{month} {day}</span>
    }    
    const style = this.props.isMediumMember ? 'authorimg mediumMember' : 'authorimg';
    return(
       <div className='author-details-grid'> 
         <div className="author-img">
            <img className={style} src={this.props.image} alt="author-img"/>
        </div>
        
        <div className="post-details-grid">
        
         <div className="author-name">
             <h3>{this.props.name}</h3>
        </div>
       
        <div className="read-detail">
        <p><span>{formatDate(this.props.postedDate)}</span> &ndash; <span className="readTime">{this.props.minutesToRead} min read</span></p>
        </div>
        </div>
        </div>
    );
}


}

AuthorBio.propTypes = {
    postedDate: PropTypes.string,
    minutesToRead: PropTypes.string,
    isMediumMember: PropTypes.bool
};