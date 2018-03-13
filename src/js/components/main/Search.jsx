import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import AutoComplete from "material-ui/AutoComplete";
import { connect } from "react-redux";
import { spotifyTrackData } from "../../actions/search";
import { postSpotifyTrackData } from "../../actions/post"
// const spotify = new Spotify();

const colors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Black",
  "White"
];

const fruit = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Blood Orange",
  "Cantaloupe",
  "Currant",
  "Cherry",
  "Cherimoya",
  "Cloudberry",
  "Coconut",
  "Cranberry",
  "Clementine",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Goji berry",
  "Gooseberry",
  "Grape",
  "Grapefruit",
  "Guava",
  "Honeydew",
  "Huckleberry",
  "Jabouticaba",
  "Jackfruit",
  "Jambul",
  "Jujube",
  "Juniper berry",
  "Kiwi fruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Lychee",
  "Nectarine",
  "Mango",
  "Marion berry",
  "Melon",
  "Miracle fruit",
  "Mulberry",
  "Mandarine",
  "Olive",
  "Orange",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Physalis",
  "Plum",
  "Pineapple",
  "Pumpkin",
  "Pomegranate",
  "Pomelo",
  "Purple Mangosteen",
  "Quince",
  "Raspberry",
  "Raisin",
  "Rambutan",
  "Redcurrant",
  "Salal berry",
  "Satsuma",
  "Star fruit",
  "Strawberry",
  "Squash",
  "Salmonberry",
  "Tamarillo",
  "Tamarind",
  "Tomato",
  "Tangerine",
  "Ugli fruit",
  "Watermelon"
];

/**
 * Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses `fuzzyFilter`,
 * and limits the number of results displayed using the `maxSearchResults` property.
 */

@connect(store => {
  return {
    searchedTracks: store.post.searchedTracks
  };
})
export default class Search extends Component {
  render() {
    const spotifyApi = new SpotifyWebApi();

    spotifyApi.setAccessToken(
      "BQCq0E3dEgFK8XLCTDZJ2j-oDnLO-GponkK09iXEamI4-RyUZUlSNFqRcyxYH4d3sm8UtSxYnCJL4IoHfkc"
    );
    const tracks = this.props.searchedTracks;
    let testArr = [];
    let test = tracks.map(track => {
      testArr.push(
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
          floatingLabelText="Search for your favourite tunes:"
          filter={AutoComplete.fuzzyFilter}
          dataSource={testArr}
          maxSearchResults={10}
          onUpdateInput={onChange}
          onNewRequest={onClick}
          fullWidth={true}
        />
      </div>
    );
  }
}
