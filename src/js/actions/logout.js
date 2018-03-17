export function logout(formText) {
    return {
      type: 'USER_LOGOUT',
      payload: {
        cookieSession: null
      },
  }
}