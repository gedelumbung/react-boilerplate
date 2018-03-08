export function login(email = '', password = '') {
  return dispatch => {
    window.location.assign("/dashboard");
  };
}

export function logout() {
  return dispatch => {

  };
}
