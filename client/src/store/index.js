import { configureStore } from '@reduxjs/toolkit';
import { compose } from 'redux';
import rootReducer from '../reducers';
import { api } from './api';

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  enhancers: (defaultEnhancers) => defaultEnhancers.concat(composeEnhancers),
});

export default store;
