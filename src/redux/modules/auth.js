const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAIL = "auth/LOGIN_FAIL";
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                access_token: action.response,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

export function login(token) {
    return {
        types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
        method: 'get',
        url: 'login/' + token,
        // body: {token: token},
    }
}
