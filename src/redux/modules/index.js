import {combineReducers} from 'redux';

import animation from './animation';
import auth from './auth';
import profile from './profile';

export default combineReducers({
    animation,
    auth,
    profile,
});