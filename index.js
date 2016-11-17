import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './store/configureStore';

import {
    workspaceState
} from './states';

const initialState = {
    todos: [],
    workspace: workspaceState
};

class AppIndex extends Component {
    render() {
        const store = configureStore(initialState);
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

ReactDOM.render(<AppIndex/>, document.getElementById('root'));