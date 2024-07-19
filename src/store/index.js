import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import socketReducer from '../reducers/socketReducer'; // Your socket reducer
import mainContentReducer from '../reducers/index'; // Ensure this is the correct path
import vehicleReducer from '../reducers/vehicleReducers'; // Ensure this is the correct path

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  socket: socketReducer,
  content: mainContentReducer,
  vehicles: vehicleReducer
  // other reducers if any
});

// Create store with combined reducers and apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
