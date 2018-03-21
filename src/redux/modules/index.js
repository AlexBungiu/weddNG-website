import {combineReducers} from 'redux';

import animation from './animation';
import auth from './auth';
import profile from './profile';
import navigator from './navigator';

export default combineReducers({
    animation,
    auth,
    profile,
    navigator,
});