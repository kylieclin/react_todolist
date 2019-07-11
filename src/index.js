import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './components/reducer';
import createSaga from 'redux-saga';
import App from './components/app';
import {getTodoList} from './components/saga';

const sagaMiddleware = createSaga();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getTodoList);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
