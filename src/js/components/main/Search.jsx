import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import AutoComplete from "material-ui/AutoComplete";
import { connect } from "react-redux";
import { spotifyTrackData } from "../../actions/search";
import { postSpotifyTrackData } from "../../actions/post"

@connect(store => {
  return {
    searchedTracks: store.post.searchedTracks
  };
})


// For tomorrow:
// searchText={this.state}

export default class Search extends Component {
  render() {
    const spotifyApi = new SpotifyWebApi();

    spotifyApi.setAccessToken(
      ""
    );

    const tracks = this.props.searchedTracks;
    let listArr = [];

    tracks.map(track => {
      listArr.push(
        `${track.artists[0].name} - ${track.name} - ${track.album.name}`
      );
    });

    const onChange = evt => {
      spotifyApi.searchTracks(evt).then(data => {
        this.props.dispatch(spotifyTrackData(data.tracks.items));
      });
    };

    const onClick = evt => {
      spotifyApi.searchTracks(evt).then(data => {
        this.props.dispatch(postSpotifyTrackData(data.tracks.items[0]));
      });
    }

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
