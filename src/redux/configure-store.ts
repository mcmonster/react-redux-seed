/**
 * @blame R. Matt McCann <me@mattmccann.xyz>
 * @brief Configures the Redux store for the app
 */

import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';


// The history object we are going to bind to the store
export const history = createBrowserHistory();

// Let's have the logger also give us state diffs for ease of reading
const logger = createLogger({
  diff: true,
});

// This services map allows us to inject services into our thunks for testing convenience
const services = { };

export const configureStore = (initialState = {}) => createStore(
  connectRouter(history)(rootReducer),
  initialState,
  applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    thunk.withExtraArgument(services),
    logger, // Logs the state changes in the store
  ),
);
