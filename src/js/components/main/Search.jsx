import React, { Component } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import AutoComplete from "material-ui/AutoComplete";
import { connect } from "react-redux";
import { spotifyTrackData } from "../../actions/search";
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
  //Spotify.searchTracks()...
  componentDidMount() {
    const spotifyApi = new SpotifyWebApi();

    spotifyApi.setAccessToken(
      "BQAbhzG8gSJ7l2psgM6aPiVOgDHhEIUCzRuIgyFDdhVbEyfLabsDBV-sraEoCfu1-R35p47BnPmVb7uQVXc"
    );

    let test = "boards canada";

    spotifyApi.searchTracks(test).then(
      data => {
        // console.log("Searching...");
        // console.log("----------------------------------");
        // console.log("----------------------------------");
        // if (data.tracks.total > 1) {
        //   data.tracks.items.map(track => {
        //     console.log("Artist: " + track.album.artists[0].name);
        //     console.log("Song Name: " + track.name);
        //     console.log("Album Name: " + track.album.name);
        //     console.log("Album Image: " + track.album.images[2].url);
        //     console.log("Track ID: " + track.album.artists[0].id);
        //     console.log("Preview URL: " + track.preview_url);
        //     console.log("----------------------------------");
        //   });
        // } else {
        //   console.log("nothing found :(");
        // }
        // console.log("----------------------------------");
        // console.log("Finished Search!");
        console.log(data.tracks.items);
        this.props.dispatch(spotifyTrackData(data.tracks.items));
      },
      err => {
        console.log("Something went wrong!", err);
      }
    );
  }
  render() {
    const tracks = this.props.searchedTracks;
    let testArr = [];
    let test = tracks.map(track => {
      // return (
      //   <tbody>
      //     <td>{track.album.artists[0].name}</td>
      //     <td>{track.name}</td>
      //     <td>{track.album.name}</td>
      //     <td>
      //       <img src={track.album.images[2].url} />
      //     </td>
      //   </tbody>
      // );
      testArr.push(`${track.album.artists[0].name} ${track.name}`);
    });
    return (
      <div>
        <AutoComplete
          floatingLabelText="Type 'r', case insensitive"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={testArr}
        />
        <br />
        <AutoComplete
          floatingLabelText="Type 'peah', fuzzy search"
          filter={AutoComplete.fuzzyFilter}
          dataSource={testArr}
          maxSearchResults={5}
        />
        <div>{test}</div>
      </div>
    );
  }
}
