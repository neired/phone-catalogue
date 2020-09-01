import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import phonesReducer from './reducer';

const store = createStore(
  phonesReducer,
  applyMiddleware(thunk)
);

export default store;