const initialState = {
    user: {
        id: null,
        name: null,
        age: null,
    },
    fetching: false,
    fetched: false,
    error: null, 
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'FETCH_USER': {
            return { ...state, fetching: true,}
        }
        case 'FETCH_USER_REJECTED': {
            return { ...state, fetching: false, error: action.payload}
        }
        case 'FETCH_USER_FULFILLED': {
            return { 
                    ...state, 
                    fetching: false, 
                    fetched: true, 
                    user: action.payload
                }
        }
        case "SET_USER_NAME": {
            return {
              ...state,
              user: {...state.user, name: action.payload},
            }
          }
          case "SET_USER_AGE": {
            return {
              ...state,
              user: {...state.user, age: action.payload},
            }
        }
    }
    return state;
};
