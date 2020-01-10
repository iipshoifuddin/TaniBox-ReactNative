import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import promiseMiddleware from 'redux-promise-middleware';

// Imports: Redux
import rootReducer from '../reducers/index';

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['login'],
  whitelist: ['login'],
  // blacklist: ['register', 'logout', 'companies', 'engineers'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger({});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux: Store
const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(logger, promiseMiddleware)),
);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export {store, persistor};
