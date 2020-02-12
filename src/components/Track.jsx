import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-lg-6">
                <div className="tracks-card">
                    <h4>{this.props.track.track_name}</h4>
                    <p>{this.props.track.artist_name}</p>
                    <Link to={`/lyrics/${this.props.track.track_id}`} className="btn btn-block btn-primary">
                            View Lyrics
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default Track;