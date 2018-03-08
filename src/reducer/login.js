const initialState = {
  loading: false,
  currentUser: {
    role: {
      data: {
        name: '',
      },
    },
  },
  loginData: {
    email: '',
    password: '',
  },
  errorMessage: null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {
        currentUser: action.currentUser,
        loading: false,
      });
    case 'REQUEST_AUTH':
      return Object.assign({}, state, { loading: true });
    case 'AUTH_FAILURE':
      return Object.assign({}, state, { errorMessage: action.errorMessage });
    case 'RESET_AUTH':
      return Object.assign({}, initialState);
    default:
      return state;
  }
}
