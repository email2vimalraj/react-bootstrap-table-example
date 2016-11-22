export default function productReducer(state = {}, action) {
  switch (action.type) {
    case 'SHOW_PRODUCTS':
      return Object.assign({}, state, action.products);

    default:
      return state;
  }
}
