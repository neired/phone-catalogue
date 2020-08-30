import { fetchPhonesBegin, fetchPhonesFailure, fetchPhonesSuccess } from './actions';

function fetchPhones() {
    console.log('holi');
    return dispatch => {
        dispatch(fetchPhonesBegin());
        fetch('http://localhost:3000/api/phones')
        .then(res => console.log(res.json()))
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchPhonesSuccess(res.phones))
        })
        .catch(error => {
            dispatch(fetchPhonesFailure(error));
        })
    }
}

export default fetchPhones;