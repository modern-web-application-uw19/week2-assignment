import React  from 'react';


export default class Properties extends React.Component {


    render()
    {

        const p1= {
            marginRight: '10px',
            color: 'gray',
            fontSize:'smaller',
            float: 'left'

        } ;

        const p2= {
            marginRight: '10px',
            color: 'gray',
            fontSize:'smaller',
            float: 'right'

        } ;
        const member = this.props.obj["memberPreview"] ? <i className="fa fa-star" style={p2} ></i> : <div></div>;

       if (this.props.obj["hasAudioAvailable"]){

           return (
               <div>
                   <i className="fa fa-volume-up" style={p1} >Audio Available</i>
                   {member}
               </div>
           );
       }
       else if (this.props.obj["memberPreview"]){
           return (
               <div>
                   <i className="fa fa-star" style={p2} >&nbsp;Member preview</i>
               </div>
           );

       }
       else{
           return <div></div>
       }
    }
}
