export function updateEditState(disabledFieldState) {
  return {
    type: "[PROFILE]UPDATE_DISABLED_FIELD_STATE",
    payload: {
      disabledFieldState: disabledFieldState
    }
  };
}
