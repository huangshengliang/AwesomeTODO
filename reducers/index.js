import { combineReducers } from 'redux';
import addTodoReducer from './addTodo';

let rootReducer = combineReducers({
    todos: addTodoReducer
});

export default rootReducer;