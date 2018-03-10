export function displayUserForums() {
    console.log("DISPLAY USER FORMS ACTION");
    return {
      type: 'SHOW_USER_FORUMS_FULFILLED',
      payload: [{
          name: 'Name Example',
          url: 'http://google.ca'
      }],
    }
  }