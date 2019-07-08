import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './components/reducer';
import createSaga from 'redux-saga';
import App from './components/app';

const sagaMiddleware = createSaga();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
//sagaMiddleware.run();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
