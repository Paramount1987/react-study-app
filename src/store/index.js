import {createStore, applyMiddleware, compose} from 'redux';
import reducer  from '../reducer';
import logger   from '../middlewares/logger';
import randomId from '../middlewares/randomId';
import api  from '../middlewares/api';
import thunk    from 'redux-thunk';
import {routerMiddleware}   from 'react-router-redux';
import history  from '../history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*const enhancer = applyMiddleware(thunk, routerMiddleware(history), randomId, api, logger);*/

const enhancer = composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history), randomId, api, logger)
);

const store = createStore(reducer, {}, enhancer);

// dev only
export default store;