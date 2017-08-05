import { combineReducers } from 'redux';

import Store from './Store';

const rootReducer = combineReducers({
    store: Store,
    hello: 'yoyo'
});

export default rootReducer;
