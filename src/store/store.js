import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import phonesReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  phonesReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;