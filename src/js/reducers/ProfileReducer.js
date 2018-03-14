export default function reducer(
  state = {
    disabledFieldState: {
      first_name: true,
      last_name: true,
      email: true,
      avatar_url: true,
      password: true
    },
    error: null
  }, action
)
 {
  return state;
}
