import axios from 'axios'

export function updateEditState(disabledFieldState) {
  return {
    type: "[PROFILE]UPDATE_DISABLED_FIELD_STATE",
    payload: {
      disabledFieldState: disabledFieldState
    }
  };
}

export function updateProfile(userProfileDetails, currentUserID) {
  return function(dispatch) {
    axios.post(`http://localhost:3000/api/profile/update/${currentUserID}`, userProfileDetails)
      .then((response) => {
        const disabledFieldState = {
          first_name: true,
          last_name: true,
          email: true,
          avatar_url: true,
          password: true
        }
        dispatch({type: "[PROFILE]UPDATE_DISABLED_FIELD_STATE", payload: {disabledFieldState: disabledFieldState}})

        axios.get(`http://localhost:3000/api/settings/${currentUserID}`)
        .then((response) => {
          dispatch({type: "FETCH_SETTINGS_FULFILLED", payload: {settings: response.data, view: ''}})
        })
        .catch((err) => {
          dispatch({type: "FETCH_SETTINGS_REJECTED", payload: err})
        })
        // console.log('response from axios',response.data);
        //  SET COOKIE
        // dispatch({type: "FETCH_USER_FORUMS_FULFILLED", payload: response.data})
        // dispatch({type: "AUTHENTICATE_VALID_REGISTER_EMAIL_FULFILLED", payload: response.data})
        // localStorage.setItem('key', response.data.token);
        // dispatch({type: "AUTHENTICATE_USER_FULFILLED", payload: response.data.authenticated})
      })
      .catch((err) => {
          dispatch({type: "AUTHENTICATE_VALID_REGISTER_EMAIL_REJECTED", payload: err})
      })
  }
}
export function disableProfile() {
  return function(dispatch) {
    const disabledFieldState = {
      first_name: true,
      last_name: true,
      email: true,
      avatar_url: true,
      password: true
    }
    dispatch({type: "[PROFILE]UPDATE_DISABLED_FIELD_STATE", payload: {disabledFieldState: disabledFieldState}})

  }
}