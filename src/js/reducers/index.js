import { combineReducers } from "redux";

//example imports
//import tweets from './tweetsReducer'
import navbar from "./NavBarReducer";
import sidebar from "./SideBarReducer";
import song from "./SongReducer";

export default combineReducers({
  navbar,
  sidebar,
  song
});
