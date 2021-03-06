import { combineReducers } from "redux";

//example imports
//import tweets from './tweetsReducer'
import navbar from "./NavBarReducer";
import sidebar from "./SideBarReducer";
import login from "./LoginReducer";
import post from "./PostReducer";
import register from "./RegisterReducer";
import profile from './ProfileReducer'
import forum from './ForumReducer'
import users from './UsersReducer'
import friend from './FriendReducer'

const appReducer = combineReducers({
  navbar,
  sidebar,
  post,
  login,
  register,
  profile,
  forum,
  users,
  friend
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
