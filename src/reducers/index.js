import { combineReducers } from 'redux';
import profileReducer from './profile.reducer';

const allReducers = combineReducers({
    profiles: profileReducer
});


export default allReducers;