import { combineReducers } from "redux";

//example imports
//import tweets from './tweetsReducer'
import navbar from './NavBarReducer'
import sidebar from './SideBarReducer'
import login from './LoginReducer'
import song from "./SongReducer"
import register from './RegisterReducer'

export default combineReducers({
    navbar,
    sidebar,
    song,
    login,
    register
})
