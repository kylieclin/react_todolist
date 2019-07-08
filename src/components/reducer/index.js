import {combineReducers} from 'redux';
import todoReducer from './todoreducer';

const rootReducer = combineReducers({
    todo: todoReducer
});

export default rootReducer;