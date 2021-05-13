import React from 'react';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import Routes from './Routes';
import Loading from '../containers/Loading';
import mysaga from '../saga';
import { reducer } from '../slice';
import { PersistGate } from 'redux-persist/integration/react';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware), applyMiddleware(logger))
);
const persistor = persistStore(store);

sagaMiddleware.run(mysaga);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
