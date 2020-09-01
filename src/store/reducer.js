import {
  FETCH_PHONES_BEGIN,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE
} from './actions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function phonesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHONES_BEGIN:
      return {
        //set loading to true when the fetch begins, and reset any errors
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PHONES_SUCCESS:
      return {
        //save phones in store when receives FETCH_PRODUCTS_SUCCESS, and set loading to false
        ...state,
        loading: false,
        items: action.payload.phones
      };
    case FETCH_PHONES_FAILURE:
      return {
        //set loading flag to false when it finishes or fails, save the error to display it, and empty phones
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
		default:
			return state;
	}
};