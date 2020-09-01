import {
  FETCH_PHONES_BEGIN,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
  STORE_DATA
} from './actions';

const initialState = {
  phones: [],
  loading: false,
  error: null
};

const phonesReducer = (state = initialState, action) => {
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
        phones: action.phones
      };
    case FETCH_PHONES_FAILURE:
      return {
        //set loading flag to false when it finishes or fails, save the error to display it, and empty phones
        ...state,
        loading: false,
        error: action.error,
        phones: []
      };
    case STORE_DATA:
      return {
        ...state,
        loading: action.loading || state.loading,
        error: action.error || state.error,
        phones: action.phones || state.phones
      };
		default:
			return state;
	}
};
export default phonesReducer;