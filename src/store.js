import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import profile from './reducers/profile.reducer'

export default createStore(
    combineReducers({
        profile
    }),
    {},
    applyMiddleware(createLogger())
 ) 