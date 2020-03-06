import React, { Component } from "react";
import Spinner from "./Spinner";
import Moment from "react-moment";

class Lyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: "",
      track_name: "",
      artist_name: "",
      genre: "No Genre Specified",
      album_art: "https://i.ya-webdesign.com/images/cd-album-cover-png-6.png",
      rel_date: "Released info not available"
    };
  }

  componentDidMount = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then(response => response.json())
      .then(responseJson => {
        // responseJson.message.body.lyrics.lyrics_body = responseJson.message.body.lyrics.lyrics_body.replace(new RegExp('\r?\n','g'), " ");
        this.setState({
          lyrics: responseJson.message.body.lyrics.lyrics_body
        });
        return fetch(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`
        );
      })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          track_name: responseJson.message.body.track.track_name,
          artist_name: responseJson.message.body.track.artist_name,
          genre:
            responseJson.message.body.track.primary_genres.music_genre_list[0]
              .music_genre.music_genre_name_extended,
          //   album_art: responseJson.message.body.track.album_coverart_100x100,
          rel_date: responseJson.message.body.track.first_release_date
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    if (this.state.lyrics === "") {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-md-6 ">
              <h3 className="track">{this.state.track_name}</h3>
              <h4 className="artist">
                <small>{this.state.artist_name}</small>
              </h4>
              <p className="lyrics">{this.state.lyrics}</p>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6 ">
              <img
                width="120px"
                src={this.state.album_art}
                alt="AlbumArt"
                className="album-art"
              />
              <h3>{this.state.genre}</h3>
              <br />
              <h3>
                <Moment format="DD/MM/YYYY">{this.state.rel_date}</Moment>
              </h3>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;
