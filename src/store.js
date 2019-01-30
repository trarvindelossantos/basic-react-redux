import { createStore, combineReducers } from 'redux';
//import logger from 'redux-logger';

import profile from './reducers/profile.reducer'

export default createStore(
    combineReducers({
        profile
    }),
    {},
    //applyMiddleware(logger())
 )