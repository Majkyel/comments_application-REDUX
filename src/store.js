import {createStore} from 'redux';
import reducer from './reducer.js';
import {addComment} from './actions.js';

export const store = createStore(reducer);

store.dispatch(addComment('PIERWSZY WPIS'));
store.dispatch(addComment('DRUGI WPIS'));
