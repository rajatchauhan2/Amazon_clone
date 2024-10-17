import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Default import
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './components/redux/reducers/main';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)) // Apply middleware with DevTools
);

export default store;
