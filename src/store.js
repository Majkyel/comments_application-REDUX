import {createStore, applyMiddleware} from 'redux'; //Logger import
import {createLogger} from 'redux-logger'; //Logger import
import reducer from './reducer.js';
import {addComment} from './actions.js';
import DevTools from './DevTools'; //DevTools import


/*const logger = createLogger();
export const store = createStore(reducer, applyMiddleware(logger));*/ //Logger mechanism

export const store = createStore(reducer, DevTools.instrument());


store.dispatch(addComment('PIERWSZY WPIS'));
store.dispatch(addComment('DRUGI WPIS'));
