import {
    ACTION_TYPE_ADD_TODO,
    ACTION_TYPE_EDIT_TODO,
    ACTION_TYPE_DELETE_TODO
} from '../constants/ActionTypes';

export let addTodo = (todo) => {
    return {
        type: ACTION_TYPE_ADD_TODO,
        payload: todo || {}
    };
};