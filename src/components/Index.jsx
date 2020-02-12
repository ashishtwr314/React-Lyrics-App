import React, { Component } from 'react';
import Tracks from './Tracks';
import Search from './Search';

class Index extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <Search />
                <Tracks />
            </React.Fragment>
         );
    }
}
 
export default Index;