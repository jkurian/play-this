import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import AutoComplete from "material-ui/AutoComplete";
import Fuse from "fuse.js";
import { connect } from "react-redux";
import { spotifyTrackData } from "../../actions/search";
import { postSpotifyTrackData } from "../../actions/post";

@connect(store => {
  return {
    searchedTracks: store.post.searchedTracks
  };
})

// For tomorrow:
// searchText={this.state}
// Also: http://fusejs.io/ for fuzzy search, is far superior than material's
export default class Search extends Component {
  render() {
    // const fuseOptions = {
    //   shouldSort: true,
    //   threshold: 0.6,
    //   location: 0,
    //   distance: 100,
    //   maxPatternLength: 32,
    //   minMatchCharLength: 1,
    //   keys: ["track.name", "track.artists[0].name", "track.album.name"]
    // };
    //
    // let fuse = new Fuse(listArr, fuseOptions);
    // let result = fuse.search();

    const spotifyApi = new SpotifyWebApi();

    spotifyApi.setAccessToken(localStorage.getItem("spotifyTokens"));

    const tracks = this.props.searchedTracks;
    let listArr = [];

    if (tracks) {
      tracks.map(track => {
        listArr.push(
          `${track.name} - ${track.artists[0].name} - ${track.album.name}`
        );
      });
    }

    const onChange = evt => {
      spotifyApi.searchTracks(evt).then(data => {
        this.props.dispatch(spotifyTrackData(data.tracks.items));
      });
    };

    const onClick = evt => {
      spotifyApi.searchTracks(evt).then(data => {
        this.props.dispatch(postSpotifyTrackData(data.tracks.items[0]));
      });
    };

    return (
      <div>
        <AutoComplete
          floatingLabelText="Search for your recommendation:"
          filter={AutoComplete.fuzzyFilter}
          dataSource={listArr}
          maxSearchResults={10}
          onUpdateInput={onChange}
          onNewRequest={onClick}
          fullWidth={true}
          menuCloseDelay={0}
        />
      </div>
    );
  }
}
