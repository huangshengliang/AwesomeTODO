import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import * as actionCreators from '../actions';

export default function configureStore(preloadedState) {
    const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators });
    if (!devToolsEnhancer) {
        console.warn('Install Redux DevTools Extension to inspect the app state: ' +
            'https://github.com/zalmoxisus/redux-devtools-extension#installation')
    }

    const logger = createLogger();

    // 1
    // const store = createStore(rootReducer, preloadedState, enhancer);

    // 2
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(logger),
            devToolsEnhancer
        )
    );

    // 3
    // const store = applyMiddleware(thunk, logger)(createStore)(rootReducer, preloadedState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};