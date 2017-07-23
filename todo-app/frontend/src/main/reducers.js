import { combineReducers } from 'redux';
import todoReducer from '../todo/todoRedurcer';

const rootReducer = combineReducers({
    todo: todoReducer
});

export default rootReducer;