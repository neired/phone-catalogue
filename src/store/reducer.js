import {
  FETCH_PHONES_BEGIN,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE
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
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PHONES_SUCCESS:
      return {
        ...state,
        loading: false,
        phones: action.payload.phones
      };
    case FETCH_PHONES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        phones: []
      };
		default:
			return state;
	}
};
export default phonesReducer;