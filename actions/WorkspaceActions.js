import {
    ACTION_TYPE_RESIZE_SIDE_PANEL
} from '../constants/ActionTypes';

export let resizeSidePanel = (delta) => ({
    type: ACTION_TYPE_RESIZE_SIDE_PANEL,
    data: {
        delta
    }
});