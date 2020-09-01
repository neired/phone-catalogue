import { createStore } from "redux";
import phonesReducer from './reducer';

const store = createStore(
  phonesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;