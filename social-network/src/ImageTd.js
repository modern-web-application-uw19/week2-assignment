import React  from 'react';

export default class ImageTd extends React.Component {

render() {
     return(
        <td>
            <img src={this.props.image} alt=""/>
        </td>
    );
}

}