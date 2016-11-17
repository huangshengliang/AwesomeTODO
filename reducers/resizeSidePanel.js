import { ACTION_TYPE_RESIZE_SIDE_PANEL } from '../constants/ActionTypes';

let resizeSidePanelReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPE_RESIZE_SIDE_PANEL:
            let { delta } = action.data;
            let newState = Object.assign({}, state, {
                workspaceWidth: state.workspaceWidth + delta
            });
            return newState;
        default:
            return state;
    }
};

export default resizeSidePanelReducer;