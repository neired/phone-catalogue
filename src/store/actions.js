export const FETCH_PHONES_BEGIN = 'FETCH_PHONES_BEGIN'; //Before you start the API call, you dispatch the BEGIN action.
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS'; //Then after the call succeeds, you dispatch SUCCESS with the data.
export const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE'; //If it failed instead, you dispatch FAILURE with the error.

export const fetchPhonesBegin = () => ({
  type: FETCH_PHONES_BEGIN
});

export const fetchPhonesSuccess = (phones) => ({
  type: FETCH_PHONES_SUCCESS,
  payload: { phones }
});

export const fetchPhonesFailuer = (error) => ({
  type: FETCH_PHONES_FAILURE,
  payload: { error }
});