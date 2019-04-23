import React  from 'react';


export default class DateFormat extends React.Component {

    fmtDate =(dte,tme)=>{
        const mons = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let time2read="";
        if (tme!=""){
            time2read=` - ${tme} min to read`;

        }

        return  `${mons[dte.getMonth()]} ${dte.getDate()} ${time2read}`;
    }

    render() {
        const dt = new Date(this.props.dt);
        const val = this.fmtDate(dt,this.props.tm);

        return (
            <div>{val}</div>

    );
    }
}
