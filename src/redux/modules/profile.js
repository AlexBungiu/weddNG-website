import {LOADING_STATUS} from "../../utils/enums";

const GET_PROFILE = 'auth/GET_PROFILE';
const GET_PROFILE_SUCCESS = 'auth/GET_PROFILE_SUCCESS';
const GET_PROFILE_FAIL = 'auth/GET_PROFILE_FAIL';
const INITIAL_STATE = {};


export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case GET_PROFILE:
            return {
                ...state,
                loadingStatus: LOADING_STATUS.LOADING,
            };
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                loadingStatus: LOADING_STATUS.SUCCESS,
                profileData: action.response,
            };
        case GET_PROFILE_FAIL:
            return {
                ...state,
                loadingStatus: LOADING_STATUS.FAIL,
                error: action.error
            };
        default:
            return state;
    }
}


export function getProfile() {
    return {
        types: [GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAIL],
        method: 'get',
        url: 'profile',
    }
}