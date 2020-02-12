import React, { Component } from 'react';
import { Consumer } from '../context';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            song: ""
         }
    }
    onClick = (dispatch, e) =>{
        e.preventDefault();
        
        fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${this.state.song}&q_lyrics=${this.state.song}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: "SEARCH_TRACKS",
                    payload:  responseJson.message.body.track_list
                })
                
            })
            .catch((error) => {
                console.error(error);
            });
        
    }

    onChange = (e) =>{
        this.setState({
            song: e.target.value
        })
    }
    render() { 
        return ( 
            <Consumer>
                {value => {
                    return(

                        <React.Fragment>
                            <div className="card text-center">

                                    <h2 className="text-center">Search For a Song</h2>
                                    <form className="text-center">
                                        <div className="form-group">
                                            <input onChange={this.onChange} value={this.state.song} type="text" className="form-control" name="song" placeholder="Enter a song name" />
                                            <button onClick={this.onClick.bind(this, value.dispatch)} className="btn btn-primary" type="submit">Get lyrics</button>
                                        </div>
                                    </form>
                                    
                            </div>
                        </React.Fragment>

                    )


                }}
                   
            </Consumer>
         );
    }
}
 
export default Search;