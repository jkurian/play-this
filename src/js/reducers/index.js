import { combineReducers } from "redux";

//example imports
//import tweets from './tweetsReducer'
import navbar from './NavBarReducer'
import sidebar from './SideBarReducer'
import login from './LoginReducer'
import song from "./SongReducer"
import register from './RegisterReducer'

const appReducer = combineReducers({
    navbar,
    sidebar,
    song,
    login,
    register
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer