import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import BoardContainer from './components/BoardContainer';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {configureStore} from './store';

import BoardContainer from './components/BoardContainer';
import './index.css';

import reportWebVitals from './reportWebVitals';

// Thunk allows us to use async functions as actions, instead of plain objects
// const store = createStore(notes, applyMiddleware(thunk));

const store = configureStore();
const persistor = persistStore(store);
console.log(store);


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <BoardContainer />      
      </PersistGate>      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
