import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './store/configureStore';

const initialState = {
    todos: []
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