export function updateEmailField(formText) {
    return {
      type: 'UPDATE_EMAIL_FIELD',
      payload: {
        loginEmailField: formText
      },
    }
  }
export function updatePasswordField(formText) {
    return {
      type: 'UPDATE_PASSWORD_FIELD',
      payload: {
        loginPasswordField: formText
      },
    }
  }

export function authenticate(loginEmailField, loginPasswordField) {
    return {
        type: 'AUTHENTICATE_USER',
        payload: {
            loginEmailField: loginEamilField,
            loginPasswordField: loginPasswordField
        }
    }
}