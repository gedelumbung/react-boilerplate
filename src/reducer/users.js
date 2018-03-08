const initialState = {
  loading: true,
  pagination_links: [],
  users: [],
  filteredParams: {
    name: '',
    email: ''
  }
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_USERS":
      return Object.assign({}, state, {
        loading: true,
        users: []
      });
    case "FILL_USERS":
      return Object.assign({}, state, {
        users: action.users,
        loading: false,
        pagination_links: action.pagination_links
      });
    case "SET_USERS_FILTERED_PARAMS":
      return {
        ...state,
        filteredParams: action.filteredParams,
      };;
  }
  return state;
}
