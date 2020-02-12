import React, { Component } from 'react';

import { Consumer } from './../context';
import Spinner from './Spinner';
import Track from './Track';

class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
                <Consumer>
                    {
                        value=>{
                            if(value.tracks === undefined || value.tracks.length === 0){
                                return (
                                    <React.Fragment>
                                        <Spinner />
                                    </React.Fragment>
                                )
                            }
                            else{
                                return (                             
                                    <React.Fragment>
                                        <h2 className="heading text-center">{value.heading}</h2>
                                        <div className="row">
                                            {value.tracks.map(value =>(
                                                <Track key={value.track.track_id} track={value.track} />
                                            ))}
                                        </div>
                                    </React.Fragment>
                                
                                )
                            }
                        }
                    }
                </Consumer>
         );
    }
}
 
export default Tracks;