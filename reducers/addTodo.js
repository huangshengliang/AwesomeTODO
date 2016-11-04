import { ACTION_TYPE_ADD_TODO } from '../constants/ActionTypes';

export let addTodoReducer = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPE_ADD_TODO:
            let { subject, startAt, endAt, content, notificationType } = action.payload;
            return [{
                id: Math.random(),
                content: content,
                subject: subject,
                startAt: startAt,
                endAt: endAt,
                notificationType: notificationType
            }, ...state];

        default:
            return state;
    }
};