export function isLoggedIn() {
  //return !!localStorage.otToken && !!localStorage.otUserId;
  return true;
}

export function logout(cb) {
  delete localStorage.otToken;
  delete localStorage.otUserId;
  if (cb) cb();
}

export function token() {
  return localStorage.otToken;
}
