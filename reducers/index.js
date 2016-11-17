import { combineReducers } from 'redux';
import { addTodoReducer } from './addTodo';
import resizeSidePanelReducer from './resizeSidePanel'

let rootReducer = combineReducers({
    todos: addTodoReducer,
    workspace: resizeSidePanelReducer
});

export default rootReducer;