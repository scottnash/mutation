import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { combinedReducers } from './redux/';
import freezeState from 'redux-freeze-state';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//freezeState(combinedReducers),
const store = createStore(
  combinedReducers,
  composeEnhancers()
)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
