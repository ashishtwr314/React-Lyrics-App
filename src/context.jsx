import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case "SEARCH_TRACKS":
            return{
                ...state,
                tracks: action.payload,
                heading: "Search Results"
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tracks : [],
            heading : "Top 10 tracks" ,
            dispatch : action => this.setState( state => reducer(state, action) )
         }
    }

    componentDidMount = ()=> {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    tracks : responseJson.message.body.track_list
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    render() { 
        return ( 
            <Context.Provider value={this.state}>
                     {this.props.children}
            </Context.Provider>
         );
    }
}
 
export  const Consumer = Context.Consumer;