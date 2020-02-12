import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
   
    render() { 
        return ( 
                <React.Fragment>
                    <h2 className="logo text-center"> Lyrics Finder </h2>
                </React.Fragment>
         );
    }
}
 
export default Navbar;