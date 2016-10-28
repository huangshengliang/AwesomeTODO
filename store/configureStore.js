import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import * as actionCreators from '../actions';

export default function configureStore(preloadedState) {
    const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators });
    if (!enhancer) {
        console.warn('Install Redux DevTools Extension to inspect the app state: ' +
            'https://github.com/zalmoxisus/redux-devtools-extension#installation')
    }

    const store = applyMiddleware(thunk, logger)(createStore)(rootReducer, preloadedState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};