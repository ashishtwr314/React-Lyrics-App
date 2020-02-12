import React, { Component } from 'react';
import spinnerImage from './lg.equalizer-bars-loader.gif';

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="center" >
                <img src={spinnerImage} alt="Loading"/>
            </div>
         );
    }
}
 
export default Spinner;